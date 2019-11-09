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

app.get("/walkpath/:id", async (req, res) => {
  const walk = await WalkPathService.find(req.params.id);
  res.send(walk);
});

app.post("/walkpath", async (req, res) => {
  const walk = await WalkPathService.add(req.body);
  res.send(walk);
});

app.get("/slots/:id", async (req, res) => {
  const slot = await SlotService.find(req.params.id);
  res.render(slot);
});

app.post("/slots", async (req, res) => {
  const slot = await SlotService.add(req.body);
  res.send(slot);
});

app.listen(3000, () => {
  console.log("Sevr listening");
});
