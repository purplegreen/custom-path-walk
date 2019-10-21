Visitor = class {
    constructor(name, code) {
        this.name = name
        this.code = code
        this.composition = []
    }
    check(path) {
        console.log("great " + path.name + ", "  + this.name + "!");
    }
    compose(walkpath) {
        this.walkpath = walkpath
        this.composition.push(walkpath)
        console.log("that's a nice one");
    }
}

mina = new Visitor ("Mina", "a001") 
lena = new Visitor ("Lena", "a002") 
pino = new Visitor ("Pino", "a003")



WalkPath = class {
    contructor(name) {
        this.name = name
        this.composition = []
    }
    printWalkPath() {
        this.composition.forEach(walkpath => console.log(walkpath))
    }
}



relaxingone = new WalkPath('realaxing walk', 'breathe' )
slowwalk = new WalkPath('Along The River');

mina.compose(relaxingone)
lena.compose(slowwalk)






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