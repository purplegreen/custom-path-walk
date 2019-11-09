const express = require("express");
const bodyParser = require("body-parser");

const WalkPathService = require("./services/walkpath-service");
const VisitorService = require("./services/visitor-service");
const SlotService = require("./services/slot-service");

const app = express();

app.set("view engine", "pug");
app.use(bodyParser.json());

app.get("/", (req, res) => {
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
