const mongoose = require("mongoose");

const WalkPathSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },

  composition: []
});

WalkPathSchema.plugin(require("mongoose-autopopulate"));

const WalkPathModel = mongoose.model("WalkPath", WalkPathSchema);

module.exports = WalkPathModel;
