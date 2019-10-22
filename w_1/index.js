Visitor = class {
    constructor(name, code) {
        this.name = name
        this.code = code
        this.compose = []
    }
    compose(walkpath) {
        this.walkpath = walkpath
        this.compose.push(walkpath)
        console.log(`nice path you composed ${this.name}`);
    }
    printWalkPath() {
        this.compose.forEach(walkpath => console.log(walkpath))
    }
}


WalkPath = class {
    contructor(name) {
        this.name = name
        this.composition = []  
    } 
    gets(slot) {
     this.slot = slot
     this.composition.push(slot) 
      console.log(`a new slot was added to the guided walk: ${this.name}`)
   } 
}


Slot = class {
    constructor (name, tipology, category, flow, duration) {
    this.name = name
    this.tipology = tipology
    this.category = category
    this.flow = flow
    this.duration = duration    
     }
     isadded(slot) {
         this.slot = slot
         slot.composition.push(this) 
         console.log(`I'm ${this.name} a new slot in your compositon`)
     }
 }


// Visitors
const mina = new Visitor ("Mina", "a001") 
const lena = new Visitor ("Lena", "a002")
const pino = new Visitor ("Pino", "a003")


// Slots
const biotope = new Slot ('Biotope', 'walk', 'landscape observation', 'invigorating', '15 min')
const quarzsand = new Slot ('Quarz Sand', 'seat', 'introspection', 'relaxing', '7 min' )
const moonlandscape = new Slot ('Moon Landscape', 'walk', 'landscape observation', 'relaxing', '17 min')


// Walk Paths
const relaxingone = new WalkPath('realaxing walk', ['biotope', 'quarzsand', 'moonlandscape'])
const longone = new WalkPath('Long Walk', [])

longone.gets(moonlandscape)
biotope.isadded(relaxingone)