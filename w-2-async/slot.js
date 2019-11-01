const chalk = require("chalk");

module.exports = class Slot {
  constructor(name, tipology, category, flow, duration, walkpaths) {
    this.name = name;
    this.tipology = tipology;
    this.category = category;
    this.flow = flow;
    this.duration = duration;
    this.walkpaths = walkpaths;
  }
  isAddedTo(walkpath) {
    this.wasCreated(walkpath);
    this.create(walkpath);
    console.log(
      chalk.green(
        `I'm ${this.name} a new slot in the ${walkpath.name} walkpath`
      )
    );
  }

  wasCreated(walkpath) {
    this.walkpaths.push(walkpath.name);
  }

  create(walkpath) {
    walkpath.composition.push(this);
  }
};
