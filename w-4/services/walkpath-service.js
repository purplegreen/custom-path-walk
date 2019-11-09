const BaseService = require("./base-service");
const WalkPathModel = require("../models/walkpath");

class WalkPathService extends BaseService {
  constructor() {
    super(WalkPathModel, `${__dirname}/../walkpath-database.json`);
  }
}

module.exports = new WalkPathService();
