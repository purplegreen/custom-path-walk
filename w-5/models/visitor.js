const mongoose = require("mongoose");

const VisitorSchema = new mongoose.Schema({
  name: String,
  mood: String,
  compose: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "walkpaths",
      autopopulate: {
        maxDepth: 1
      }
    }
  ]
});

VisitorSchema.plugin(require("mongoose-autopopulate"));

const VisitorModel = mongoose.model("Visitor", VisitorSchema);

module.exports = VisitorModel;
