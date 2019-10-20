Visitor = class {
    constructor(name, code) {
        this.name = name
        this.code = code
        this.walkpaths = []
    }
    check(path) {
        console.log("great " + path.name + "and "  + this.name)
    }
    compose(walkpath) {
        this.walkpaths.push(walkpath)
        walkpath.composition.push(this)
    }
}

mina = new Visitor ("Mina", "a001") 
lena = new Visitor ("Lena", "a002") 
pino = new Visitor ("Pino", "a003")


WalkPath = class {
    contructor(name) {
        this.name = name,
        this.composition = []
    }
    printWalkPathName() {
        this.composition.forEach(pathName)
    }
}

pathName = path => console.log(path.name)
makeComposition = composition => console.log(composition.name)

slowwalk = new WalkPath('Along The River')
lena.compose(slowwalk)

slowwalk.printWalkPathName()




// slots will compose the entire walk. It will have a name. A typology: walk, seat, float, breathe. A category: relaxing, invigorating. Duration: in minutes.
/*
Slot = class {
   constructor (name, tipology, category) {
   this.name = name,
   this.tipology = tipology,
   this.category = category,
   this.duration = duration    
    }
} 

// wheather conditions 

/* Wheather = class {
    constructor ( sunny, rainy ) {
        this.sunny = sunny,
        this.rainy = rainy
    }
} */