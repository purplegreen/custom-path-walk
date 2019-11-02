const WalkPath = require("./models/walkpath");
const Visitor = require("./models/visitor");
const Slot = require("./models/slot");

const WalkPathService = require("./services/walkpath-service");
const VisitorService = require("./services/visitor-service");
const SlotService = require("./services/slot-service");

console.log("Let's check this first :)");

async function main() {
  const cleo = new Visitor("Cleopatra", "A0445");
  const dana = new Visitor("Danahe", "A0446");

  const lazy = new WalkPath("Lazy Path", "C987", cleo, []);
  const sandscape = new Slot(
    "Sand Landscape",
    "walk",
    "listening",
    "relaxing",
    "11 min"
  );

  await VisitorService.add(cleo);
  await VisitorService.add(dana);

  const visitors = await VisitorService.findAll();

  console.log(visitors[0].name);
  console.log(visitors[1].name);

  await VisitorService.del(1);

  const newVisitors = await VisitorService.findAll();

  console.log(newVisitors[0].name);
}

main();
