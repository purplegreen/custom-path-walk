const BaseService = require("./base-service");
const WalkPathModel = require("../models/walkpath");

class WalkPathService extends BaseService {
  model = WalkPathModel;
}

module.exports = new WalkPathService();
