const express = require("express");
const bodyParser = require("body-parser");

const WalkPath = require("./models/walkpath");
const Visitor = require("./models/visitor");
const Slot = require("./models/slot");

const WalkPathService = require("./services/walkpath-service");
const VisitorService = require("./services/visitor-service");
const SlotService = require("./services/slot-service");

const app = express();

app.use(bodyParser.json());

app.set("view engine", "pug");

app.get("/", (req, res) => {
  // res.sendFile(`${__dirname}/index.html`);
  res.render("index");
});

app.get("/walkpath/all", async (req, res) => {
  const walkpaths = await WalkPathService.findAll();
  res.render("walkpath", { walkpaths: walkpaths });
});

app.get("/slots/all", async (req, res) => {
  const slot = await SlotService.findAll();
  res.render("slots", { slot: slot });
});

app.listen(3000, () => {
  console.log("Sevr listening");
});
