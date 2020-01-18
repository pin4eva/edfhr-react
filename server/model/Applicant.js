const mongoose = require("mongoose");

const NewApplicantSchema = new mongoose.Schema({
  proxy: { type: Boolean, default: false },
  proxy_name: String,
  proxy_email: String,
  proxy_phone: String,
  proxy_address: String,
  name: String,
  phone: String,
  gender: String,
  address: String,
  breach_nature: String,
  breach_type: String,
  inPolice: Boolean,
  daysPlus: { type: Boolean, default: false },
  inPrison: { type: Boolean, default: false },
  monthsPlus: { type: Boolean, default: false },
  arrested_on: Date,
  arrested_at: String,
  offence_charged: String,
  offence_suspected: String,
  hasMates: { type: Boolean, default: false },
  case_mates: { type: Number, default: 0 },
  itinerary: String,
  station: String,
  station2: String,
  station_duration: { type: Number, default: 0 },
  station2_duration: { type: Number, default: 0 },
  image: String,
  beaten: { type: Boolean, default: false },
  injured: { type: Boolean, default: false },
  injured_explained: String,
  bailFee: { type: Boolean, default: false },
  bailAmount: { type: Number, default: 0 },
  bail_explained: String,
  detention_cost: { type: Boolean, default: false },
  detention_cost_explained: String,
  relatives: [{ name: String, phone: String, rel: String }],
  dppAdvice: { type: Boolean, default: false },
  first_accused: String,
  brief: String,
  exhibit: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exhibit" }], //[{ name: String, image: String }]
  arraigned_on: Date,
  arraigned_at: String,
  createdAt: { type: Date, default: Date.now },
  state_origin: String,
  state_residence: String,
  state_arrest: String,
  lga: String,
  agentID: String,
  adjournment_date: Date,
  caseType: String,
  token: String,
  email: String
});

const ExhibitSchema = new mongoose.Schema({
  name: String,
  image: String
});
ExhibitSchema.pre("remove", async function(next) {
  // console.log("Exhibit was removed", this.name, this.image);
  var id = this._id;
  mongoose
    .model("NewApplicant")
    .updateOne({ exhibit: { $in: [id] } }, { $pull: { exhibit: { _id: id } } });

  next();
});

const Exhibit = mongoose.model("Exhibit", ExhibitSchema);
const NewApplicant = mongoose.model("NewApplicant", NewApplicantSchema);

module.exports = {
  NewApplicant,
  Exhibit
};
