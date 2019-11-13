const BaseService = require("./base-service");
const VisitorModel = require("../models/visitor");

class VisitorService extends BaseService {
  model = VisitorModel;
}

module.exports = new VisitorService();
