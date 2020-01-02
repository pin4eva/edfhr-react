const router = require("express").Router();

const {
  createApplicant,
  viewApplicants,
  viewApplicant,
  searchToken,
  updateApplicant
} = require("../controllers/applicant");

router
  .route("/")
  .post(createApplicant)
  .get(viewApplicants);

router.route("/:id").get(viewApplicant);
router
  .route("/token/:token")
  .get(searchToken)
  .put(updateApplicant);

module.exports = router;
