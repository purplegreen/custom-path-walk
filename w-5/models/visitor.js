const mongoose = require("mongoose");

const VisitorSchema = new mongoose.Schema({
  name: String,
  mood: String,
  walkpaths: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Walkpath"
    }
  ]
});

const VisitorModel = mongoose.model("Visitor", VisitorSchema);

module.exports = VisitorModel;
