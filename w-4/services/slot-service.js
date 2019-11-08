const BaseService = require("./base-service");
const SlotModel = require("../models/slot");

class SlotService extends BaseService {
  constructor() {
    super(SlotModel, `${__dirname}/../slots-database.json`);
  }
}

module.exports = new SlotService();
