const { NewApplicant, Exhibit } = require("../model/Applicant");
const path = require("path");
const uploadPath = "../../public/uploads/";

const createApplicant = async (req, res) => {
  const payload = { ...req.body };

  let count = await NewApplicant.countDocuments().catch(err =>
    res.status(400).json({ success: false, msg: err.message })
  );
  count = (count + 1).toString();

  let SN = `${payload.caseType}-${count.padStart(4, "000")}`;

  const applicant = await NewApplicant.create({
    ...payload,
    token: SN
  }).catch(err => res.status(400).json({ success: false, msg: err.message }));
  res.status(200).json({ success: true, data: applicant });
};

const exhibitUpload = async (req, res) => {
  const { image } = req.files;
  image.mv(path.resolve(__dirname, uploadPath, image.name), async err => {
    if (err) return res.send(err);
    let applicant = await NewApplicant.findById(req.params.id).catch(err =>
      res.json(err.message)
    );
    if (!applicant)
      return res.json({ success: false, msg: "No applicant found" });
    const exhibit = await Exhibit.create({
      name: req.body.name,
      image: `/uploads/${image.name}`
    }).catch(err => res.json({ success: false, msg: err.message }));

    if (exhibit) {
      const newApplicant = await NewApplicant.findOneAndUpdate(
        { _id: applicant._id },
        {
          $push: {
            exhibit
          }
        },

        { new: true }
      ).catch(err => res.json({ success: false, msg: err.message }));
      res.json({ success: true, newApplicant });
    } else {
      res.json({ success: true, data: exhibit });
    }
  });
};

const deleteExhibit = async (req, res) => {
  // const exhibit = await Exhibit.findOne({
  //   _id: req.params.exhibit
  // }).catch(err => res.json({ success: false, msg: err.message }));
  // exhibit.remove();
  // res.json({ success: true, data: exhibit });

  let exhibit = await NewApplicant.updateOne(
    {
      exhibit: req.params.exhibit
    },
    { $pull: { exhibit: req.params.exhibit } }
  ).catch(err => res.json(err.message));

  exhibit = await Exhibit.findOne({ _id: req.params.exhibit });

  exhibit.remove();

  // if (!exhibit) return res.json({ success: false, msg: "No applicant found" });
  // const exhibit1 = await NewApplicant.updateOne(
  //   { exhibit: exhibit._id },
  //   { $pull: { exhibit: { _id: req.params.exhibit } } }
  // );

  res.json({ success: true, data: exhibit });
};

const viewApplicants = async (req, res) => {
  const applicants = await NewApplicant.find()
    .populate({
      path: "exhibit",
      model: "Exhibit"
    })

    .catch(err => res.status(400).json({ success: false, msg: err.message }));
  res.status(200).json({ success: true, data: applicants });
};
const viewApplicant = async (req, res) => {
  const applicants = await NewApplicant.findOne({
    _id: req.params.id
  }).catch(err => res.status(400).json({ success: false, msg: err.message }));
  res.status(200).json({ success: true, data: applicants });
};
const searchToken = async (req, res) => {
  // return res.json(req.query.token);
  const applicants = await NewApplicant.findOne({
    token: req.params.token
  }).catch(err => res.status(400).json({ success: false, msg: err.message }));
  if (!applicants) return res.json({ success: false, msg: "No record found" });
  res.status(200).json({ success: true, data: applicants });
};

const updateApplicant = async (req, res) => {
  const applicants = await NewApplicant.findOneAndUpdate(
    {
      token: req.params.token
    },
    req.body,
    { new: true }
  ).catch(err => res.status(400).json({ success: false, msg: err.message }));
  res.status(200).json({ success: true, data: applicants });
};

const deleteApplicant = async (req, res) => {
  const applicant = await NewApplicant.findOne({
    _id: req.params.id
  }).catch(err => res.json({ success: false, msg: err.message }));
  applicant.remove();
  res.json({ success: true, data: applicant });
};
module.exports = {
  createApplicant,
  viewApplicants,
  viewApplicant,
  searchToken,
  updateApplicant,
  exhibitUpload,
  deleteExhibit,
  deleteApplicant
};
