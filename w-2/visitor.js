const chalk = require('chalk')

module.exports = class Visitor {
    constructor(name, code) {
        this.name = name
        this.code = code
        this.compose = []
    }
    hasComposed(walkpath) {
        this.compose.push(walkpath.name)
        walkpath.composedBy.push(this)
        console.log(chalk.hex('#B194C4').bold(`Nice path you composed ${this.name}`));
    }
    printWalkPath() {
        this.compose.forEach(walkpath => console.log(walkpath))
    }
}
