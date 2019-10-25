const chalk = require('chalk');

module.exports = class Slot {
    constructor (name, tipology, category, flow, duration) {
    this.name = name
    this.tipology = tipology
    this.category = category
    this.flow = flow
    this.duration = duration
    this.walkpaths = []  
    }
        isAddedTo(walkpath) {
            this.walkpaths.push(walkpath.name)
            walkpath.composition.push(this) 
            console.log(chalk.green(`I'm ${this.name} a new slot in the ${walkpath.name} walkpath`))
            }
     }
 