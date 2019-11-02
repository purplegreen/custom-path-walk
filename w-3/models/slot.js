const chalk = require("chalk");

module.exports = class Slot {
  constructor(name, id, tipology, category, flow, duration) {
    this.name = name;
    this.id = id;
    this.tipology = tipology;
    this.category = category;
    this.flow = flow;
    this.duration = duration;
    this.walkpaths = [];
  }
  isAddedTo(walkpath) {
    this.wasCreated(walkpath);
    console.log(
      chalk.green(
        `I'm ${this.name} a new slot in the ${walkpath.name} walkpath`
      )
    );
  }

  static create({ name, id, tipology, category, flow, duration }) {
    return new Slot(name, id, tipology, category, flow, duration);
  }
};
