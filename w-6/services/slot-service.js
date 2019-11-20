const BaseService = require("./base-service");
const SlotModel = require("../models/slot");

class SlotService extends BaseService {
  model = SlotModel;
}

module.exports = new SlotService();
