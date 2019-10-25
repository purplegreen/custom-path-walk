const chalk = require('chalk')

module.exports = class WalkPath {
    constructor(name) {
        this.name = name
        this.composition = [] 
        this.composedBy = [] 
    } 
    getsSlot(slot) {
        this.composedBy.push(slot)
        slot.walkpaths.push(this)
         console.log((chalk.cyanBright)`A new slot was added to the guided walk: ${this.name}`)
      } 
   message() {
    console.log(chalk.hex('#A97FA2')(`Your walk begins with the slot: ${this.composition[0].name} `))
   }
   
}
