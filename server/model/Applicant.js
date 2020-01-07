const mongoose = require("mongoose");

const NewApplicant = new mongoose.Schema({
  proxy: Boolean,
  name: String,
  gender: String,
  address: String,
  breach_nature: String,
  breach_consequence: String,
  inPolice: Boolean,
  days_in_detention: { type: Number, default: 0 },
  inPrison: Boolean,
  months_inPrison: { type: Number, default: 0 },
  arrested_on: Date,
  arrested_at: String,
  offence: String,
  case_mate: Number,
  itinerary: String,
  station: String,
station2: String,
  image: String,
  beaten: Boolean,
  injured: Boolean,
  beaten_explained: String,
  bailFee: Boolean,
  bailAmount: Number,
  bail_explained: String,
  detention_cost: String,
  relatives: [{ type: mongoose.Schema.Types.ObjectId, ref: "Relation" }],
  dppAdvice: String,
  first_accused: String,
  brief: String,
  exibit: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exibit" }],
  arraigned_on: Date,
  arraigned_at: String,
  createdAt: { type: Date, default: Date.now },
  state_origin: String,
  state: String,
  lga: String
});

const RelationSchema = new mongoose.Schema({
  name: String,
  phone: String,
  rel: String
});

const ExibitSchema = new mongoose.Schema({
  name: String,
  image: String
});
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
