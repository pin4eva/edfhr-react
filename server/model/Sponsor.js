const mongoose = require("mongoose");

const SponsorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  others: String,
  phone: Number,
  referrer: { type: mongoose.Schema.Types.ObjectId, Ref: "Rep" },
  clients: [{ type: mongoose.Schema.Types.ObjectId, Ref: "Rep" }],
  assisted: { type: Number, default: 0 },
  anonymous: { type: Boolean, default: false }
});

const Sponsor = mongoose.model("Sponsor", SponsorSchema);

module.exports = Sponsor;
