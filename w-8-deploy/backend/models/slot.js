const mongoose = require("mongoose");

const SlotSchema = new mongoose.Schema({
  name: String,
  tipology: String,
  category: String,
  flow: String,
  duration: Number,
  componentOf: []
});

SlotSchema.plugin(require("mongoose-autopopulate"));

const SlotModel = mongoose.model("Slot", SlotSchema);

module.exports = SlotModel;
