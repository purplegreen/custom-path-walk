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

//walkpath
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

app.delete("/walkpath/:id", async (req, res) => {
  const walk = await WalkPathService.del(req.params.id);
  res.send("done");
});

//slots
app.get("/slots/all", async (req, res) => {
  const slot = await SlotService.findAll();
  res.render("slots", { slot: slot });
});

app.get("/slots/:id", async (req, res) => {
  const slot = await SlotService.find(req.body);
  res.send(slot);
});

app.post("/slots", async (req, res) => {
  const slot = await SlotService.add(req.body);
  res.send(slot);
});

app.delete("/slots/:id", async (req, res) => {
  const slot = await SlotService.del(req.params.id);
  res.send("ok");
});

// visitors
app.get("/visitors/all", async (req, res) => {
  const visitor = await VisitorService.findAll();
  res.render("visitors", { visitor });
});

app.get("/visitors/:id", async (req, res) => {
  const visitor = await VisitoService.find(req.body);
  res.send(visitor);
});

app.post("/visitors", async (req, res) => {
  const visitor = await VisitorService.add(req.body);
  res.send(visitor);
});

app.delete("/visitors/:id", async (req, res) => {
  const visitor = await VisitorService.del(req.params.id);
  res.send("done");
});

app.listen(3000, () => {
  console.log("Sevr listening");
});
