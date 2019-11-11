const chalk = require("chalk");

module.exports = class Visitor {
  constructor(name, id, mood) {
    this.name = name;
    this.id = id;
    this.mood = mood;
    this.compose = [];
  }
  hasComposed(walkpath) {
    this.compose.push(walkpath.name);
    walkpath.composedBy.push(this);
    console.log(
      chalk.hex("#B194C4").bold(`Nice path you composed ${this.name}`)
    );
  }
  printWalkPath() {
    this.compose.forEach(walkpath => console.log(walkpath));
  }
  static create({ name, id, mood }) {
    return new Visitor(name, id, mood);
  }
};
