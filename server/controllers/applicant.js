const { Applicant, Draft } = require("../model/Applicant");

const createApplicant = async (req, res) => {
  const payload = { ...req.body };

  let count = await Applicant.countDocuments().catch(err =>
    res.status(400).json({ success: false, msg: err.message })
  );
  count = (count + 1).toString();

  let SN = `${new Date().getFullYear()}-${payload.firstName
    .toLowerCase()
    .charAt(0)}${payload.lastName
    .toLowerCase()
    .charAt(0)}${payload.caseType.toLowerCase()}-${count.padStart(4, "000")}`;

  const applicant = await Applicant.create({
    ...payload,
    token: SN
  }).catch(err => res.status(400).json({ success: false, msg: err.message }));
  res.status(200).json({ success: true, data: applicant });
};

const viewApplicants = async (req, res) => {
  const applicants = await Applicant.find().catch(err =>
    res.status(400).json({ success: false, msg: err.message })
  );
  res.status(200).json({ success: true, data: applicants });
};
const viewApplicant = async (req, res) => {
  const applicants = await Applicant.findOne({
    _id: req.params.id
  }).catch(err => res.status(400).json({ success: false, msg: err.message }));
  res.status(200).json({ success: true, data: applicants });
};
const searchToken = async (req, res) => {
  // return res.json(req.query.token);
  const applicants = await Applicant.findOne({
    token: req.params.token
  }).catch(err => res.status(400).json({ success: false, msg: err.message }));
  if (!applicants) return res.json({ success: false, msg: "No record found" });
  res.status(200).json({ success: true, data: applicants });
};

const updateApplicant = async (req, res) => {
  const applicants = await Applicant.findOneAndUpdate(
    {
      token: req.params.token
    },
    req.body,
    { new: true }
  ).catch(err => res.status(400).json({ success: false, msg: err.message }));
  res.status(200).json({ success: true, data: applicants });
};

module.exports = {
  createApplicant,
  viewApplicants,
  viewApplicant,
  searchToken,
  updateApplicant
};
