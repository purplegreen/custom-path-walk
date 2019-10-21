Visitor = class {
    constructor(name, code) {
        this.name = name
        this.code = code
        this.composition = []
    }
    compose(walkpath) {
        this.walkpath = walkpath
        this.composition.push(walkpath)
        console.log(`nice path you composed ${this.name}`);
    }
    printWalkPath() {
        this.composition.forEach(walkpath => console.log(walkpath))
    }
}


//several slots will compose the walk. which will have a name. 
// typology: walk, seat, float, breathe.
// category: landscape oservation, introspection.
// flow: relaxing, invigorating. 
 //duration: in minutes.


WalkPath = class {
    contructor(name) {
        this.name = name
        this.slots = []     
    } 
    added(onemore) {
      this.onemore = onemore
      this.slots.push(onemore)
      console.log(`a new slot was added to the guided walk: ${this.name}`)
} 
moreSlots() {
    this.slots.forEach(onemore => console.log(onemore))
}
}


Slot = class {
    constructor (name, tipology, category, flow, duration) {
    this.name = name
    this.tipology = tipology
    this.category = category
    this.flow = flow
    this.duration = duration    
    this.composition = []
     }
 }


// Visitors
const mina = new Visitor ("Mina", "a001") 
const lena = new Visitor ("Lena", "a002") 
const pino = new Visitor ("Pino", "a003")

console.log(mina.code)


// Slots
const biotope = new Slot ('Biotope', 'walk', 'landscape observation', 'invigorating', '15 min')
const quarzsand = new Slot ('Quarz Sand', 'seat', 'introspection', 'relaxing', '7 min' )
const moonlandscape = new Slot ('Moon Landscape', 'walk', 'landscape observation', 'relaxing', '17 min')


// Walk Paths
const relaxingone = new WalkPath('realaxing walk', ['biotope', 'quarzsand', 'moonlandscape'])
const longone = new WalkPath('Long Walk', [])

lena.compose(relaxingone)
longone.added(biotope)