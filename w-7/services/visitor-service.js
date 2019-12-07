const BaseService = require("./base-service");
const VisitorModel = require("../models/visitor");

class VisitorService extends BaseService {
  model = VisitorModel;

  async composes(visitor, walkpath) {
    visitor.walkpaths.push(walkpath);
    walkpath.composers.push(visitor);
    await visitor.save();
    await walkpath.save();
  }
}

module.exports = new VisitorService();
