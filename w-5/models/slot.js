const mongoose = require("mongoose");

const SlotSchema = new mongoose.Schema({
  name: String,
  tipology: String,
  category: String,
  flow: String,
  duration: Number,
  componentOf: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Walkpath"
    }
  ]
});

const SlotModel = mongoose.model("Slot", SlotSchema);

module.exports = SlotModel;
