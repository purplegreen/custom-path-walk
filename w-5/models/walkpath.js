const mongoose = require("mongoose");

const WalkPathSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  composition: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Slot"
    }
  ],
  composers: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Visitor"
    }
  ]
});

const WalkPathModel = mongoose.model("Walkpath", WalkPathSchema);

module.exports = WalkPathModel;
