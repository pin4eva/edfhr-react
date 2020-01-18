const router = require("express").Router();

const {
  createApplicant,
  viewApplicants,
  viewApplicant,
  searchToken,
  updateApplicant,
  exhibitUpload,
  deleteExhibit,
  deleteApplicant
} = require("../controllers/applicant");

router
  .route("/")
  .post(createApplicant)
  .get(viewApplicants);

router
  .route("/single/:id")
  .get(viewApplicant)
  .delete(deleteApplicant);
router
  .route("/token/:token")
  .get(searchToken)
  .put(updateApplicant);

router.route("/exhibit/:id").put(exhibitUpload);
router.route("/exhibit/:exhibit").delete(deleteExhibit);

module.exports = router;
