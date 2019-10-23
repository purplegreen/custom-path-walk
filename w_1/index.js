Visitor = class {
    constructor(name, code) {
        this.name = name
        this.code = code
        this.compose = []
    }
    hasComposed(walkpath) {
        this.walkpath = walkpath
        walkpath.compose.push(this)
        console.log(`nice path you composed ${this.name}`);
    }
    printWalkPath() {
        this.compose.forEach(walkpath => console.log(walkpath))
    }
}


WalkPath = class {
    constructor(name) {
        this.name = name
        this.composition = []  
    } 
    getsSlot(slot) {
        this.slot = slot
        slot.compose.push(slot)
         console.log(`a new slot was added to the guided walk: ${this.name}`)
      } 
   message() {
    console.log(`your walk begins with ${this.name[0]} `)
   }
   
}


Slot = class {
    constructor (name, tipology, category, flow, duration) {
    this.name = name
    this.tipology = tipology
    this.category = category
    this.flow = flow
    this.duration = duration
    this.walkpaths = []  
    }
        isAddedTo(walkpath) {
            this.walkpaths.push(walkpath)
            walkpath.composition.push(this) 
            console.log(`I'm ${this.name} a new slot in the ${this.walpath} walkpath`)
            }
     }
 


// Visitors
const mina = new Visitor ("Mina", "a001") 
const lena = new Visitor ("Lena", "a002")
const pino = new Visitor ("Pino", "a003")


// Slots
const biotope = new Slot ('Biotope', 'walk', 'landscape observation', 'invigorating', '15 min')
const quarzSand = new Slot ('Quarz Sand', 'seat', 'introspection', 'relaxing', '7 min' )
const moonScape = new Slot ('Moon Landscape', 'walk', 'landscape observation', 'relaxing', '17 min')


// Walk Paths
const relaxingOne = new WalkPath('realaxing walk')
const longOne = new WalkPath('Long Walk')


biotope.isAddedTo(relaxingOne)
mina.hasComposed(longOne)