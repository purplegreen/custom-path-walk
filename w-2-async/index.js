//written and reviewd with Women Techmakers Berlin - JavaScript C C Vol. 3
const Database = require("./database");
const WalkPath = require("./walkpath");
const Visitor = require("./visitor");
const Slot = require("./slot");

const stuffToDoAfterLoadingTheDatabase = (err, loadedFile) => {
  if (err) {
    console.log("Hey there! we have an error", err);
    return;
  }
  console.log("nice!");

  const commVessels = WalkPath.create(loadedFile);
  const tea = new Visitor("Tea", "b230x");
  tea.hasComposed(commVessels);
  console.log(commVessels.name);
};

Database.load("walkpaths.json", stuffToDoAfterLoadingTheDatabase);
console.log("was i added?");
