const mongoose = require("mongoose");

const ApplicantSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  other: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: String, required: true },
  token: { type: String },
  status: { type: Boolean, default: false },
  caseType: String,
  pic: String,
  state_origin: String,
  gender: String,
  lga: String,
  form: { type: mongoose.Schema.Types.ObjectId, ref: "Draft" },
  referrer: { type: mongoose.Schema.Types.ObjectId, Ref: "Rep" }
});

const DraftSchema = new mongoose.Schema({
  arrested_on: String,
  state_arrest: String,
  city: String,
  ipo: String,
  police_address: String,
  prison_name: String
});

const Draft = mongoose.model("Draft", DraftSchema);
// const Affidavit = mongoose.model("Affidavit", AffidavitSchema);
const Applicant = mongoose.model("Applicant", ApplicantSchema);

module.exports = {
  Draft,
  Applicant
};
