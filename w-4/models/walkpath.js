const chalk = require("chalk");

module.exports = class WalkPath {
  constructor(name, id, composedBy, composition = []) {
    this.name = name;
    this.id = id;
    this.composedBy = composedBy;
    this.composition = composition;
  }
  getsSlot(slot) {
    this.composition.push(slot);
    slot.walkpaths.push(this.name);
    console.log(
      chalk.cyanBright`A new slot was added to the guided walk: ${this.name}`
    );
  }
  printComposerName() {
    this.composedBy.forEach(printName);
  }
  message() {
    console.log(
      chalk.hex("#A97FA2")(
        `Your walk begins with the slot: ${this.composition} `
      )
    );
  }
  static create({ name, id, composition }) {
    return new WalkPath(name, id, composition);
  }
};
