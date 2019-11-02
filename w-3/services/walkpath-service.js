const BaseService = require("./base-service");
const WalkpathModel = require("../models/walkpath");

class WalkpathService extends BaseService {
  constructor() {
    super(WalkpathModel, `${__dirname}/../walkpath-database.json`);
  }
}

module.exports = new WalkpathService();
