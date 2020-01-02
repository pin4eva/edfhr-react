const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  applicant_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Partner",
    required: true
  },
  draft_type: { type: String, required: true }
});

module.exports = mongoose.model("Form", FormSchema);
