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
      ref: "Slot",
      autopopulate: {
        maxDepth: 1
      }
    }
  ],
  composer: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Visitor",
      autopopulate: {
        maxDepth: 1
      }
    }
  ]
});

WalkPathSchema.plugin(require("mongoose-autopopulate"));

const WalkPathModel = mongoose.model("Walkpath", WalkPathSchema);

module.exports = WalkPathModel;
