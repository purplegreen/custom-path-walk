const chalk = require("chalk");

module.exports = class WalkPath {
  constructor(name, composition) {
    this.name = name;
    this.composition = composition;
    this.composedBy = [];
  }
  getsSlot(slot) {
    this.composedBy.push(slot);
    slot.walkpaths.push(this.name);
    console.log(
      chalk.cyanBright`A new slot was added to the guided walk: ${this.name}`
    );
  }
  printCompositionName() {
    this.composition.forEach(printName);
  }
  message() {
    console.log(
      chalk.hex("#A97FA2")(
        `Your walk begins with the slot: ${this.composition[0].name} `
      )
    );
  }
};
