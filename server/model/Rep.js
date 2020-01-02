const mongoose = require("mongoose");

const RepSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  others: String,
  phone: Number,
  rep_id: String,
  referrer: { type: mongoose.Schema.Types.ObjectId, Ref: "Rep" },
  clients: [{ type: mongoose.Schema.Types.ObjectId, Ref: "Rep" }],
  target: Number,
  role: String //State rep, reqional reps, suppervisor
});

const Rep = mongoose.model("Rep", RepSchema);

module.exports = Rep;
