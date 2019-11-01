//written and reviewd with Women Techmakers Berlin - JavaScript C C Vol. 3

const WalkPath = require("./walkpath");
const Visitor = require("./visitor");
const Slot = require("./slot");
const Database = require("./database");

// Visitors
const mina = new Visitor("Mina", "a001");
const lena = new Visitor("Lena", "a002");
const pino = new Visitor("Pino", "a003");

// Slots
const biotope = new Slot(
  "Biotope",
  "walk",
  "landscape observation",
  "invigorating",
  "15 min"
);
const quarzSand = new Slot(
  "Quarz Sand",
  "seat",
  "introspection",
  "relaxing",
  "7 min"
);
const moonScape = new Slot(
  "Moon Landscape",
  "walk",
  "landscape observation",
  "relaxing",
  "17 min"
);

// Walk Paths
const relaxingOne = new WalkPath("Realaxing Walk");
const longOne = new WalkPath("Long Walk");

mina.hasComposed(longOne);
lena.hasComposed(relaxingOne);
moonScape.isAddedTo(relaxingOne);
quarzSand.isAddedTo(relaxingOne);
relaxingOne.getsSlot(moonScape);
relaxingOne.message();
quarzSand.isAddedTo(longOne);
longOne.message();
moonScape.printComposition();

// save and load to database let's try Async
const stuffToDoAfterLoadingTheDatabase = (err, loadedFile) => {
  if (err) {
    console.log("Hey there! we have an error", err);
    return;
  }
  console.log("nice!");

  const commVessels = WalkPath.create(loadedFile);
  const tea = new Visitor("Tea", "b230x");
  tea.hasComposed(commVessels);
  commVessels.printCompositionName;
};

Database.load("walkpaths.json", stuffToDoAfterLoadingTheDatabase);
console.log("was i added?");
