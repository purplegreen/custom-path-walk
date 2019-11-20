const BaseService = require("./base-service");
const WalkPathModel = require("../models/walkpath");

class WalkPathService extends BaseService {
  model = WalkPathModel;

  async composed(walkpath, slot) {
    walkpath.composition.push(slot);
    slot.componentOf.push(walkpath);
    await walkpath.save();
    await slot.save();
  }
}

module.exports = new WalkPathService();
