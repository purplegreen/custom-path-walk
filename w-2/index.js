//written and reviewd with Women Techmakers Berlin - JavaScript C C Vol. 3 



const WalkPath = require('./walkpath')
const Visitor = require('./visitor')
const Slot = require('./slot')
const Database = require('./database')


// Visitors
const mina = new Visitor ("Mina", "a001") 
const lena = new Visitor ("Lena", "a002")
const pino = new Visitor ("Pino", "a003")


// Slots
const biotope = new Slot ('Biotope', 'walk', 'landscape observation', 'invigorating', '15 min')
const quarzSand = new Slot ('Quarz Sand', 'seat', 'introspection', 'relaxing', '7 min' )
const moonScape = new Slot ('Moon Landscape', 'walk', 'landscape observation', 'relaxing', '17 min')


// Walk Paths
const relaxingOne = new WalkPath('Realaxing Walk')
const longOne = new WalkPath('Long Walk')


mina.hasComposed(longOne)
lena.hasComposed(relaxingOne)
moonScape.isAddedTo(relaxingOne)
quarzSand.isAddedTo(relaxingOne)
relaxingOne.getsSlot(moonScape)
relaxingOne.message()
quarzSand.isAddedTo(longOne)
longOne.message()


// save and load to database

const walkpathsCollection  = [longOne, relaxingOne]
Database.save('walkpaths.json', walkpathsCollection)

const loadedWalkpaths = Database.load('walkpaths.json')

const slotsCollection = [biotope, quarzSand, moonScape]
Database.save('slots.json', slotsCollection)
const loadedSlots = Database.load('slots.json')

const visitorsCollection = [mina, lena, pino]
Database.save('visitors.json', visitorsCollection)
const loadedVisitors = Database.load('visitors.json')
