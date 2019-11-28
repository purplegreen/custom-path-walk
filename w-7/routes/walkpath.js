const express = require("express");
const router = express.Router();

const WalkPathService = require("../services/walkpath-service");
const SlotService = require("../services/slot-service");

router.get("/all", async (req, res) => {
  const walkpaths = await WalkPathService.findAll();
  res.render("list", { items: walkpaths });
});

router.get("/all/json", async (req, res) => {
  const walkpaths = await WalkPathService.findAll();
  res.send(walkpaths);
});

router.get("/:id", async (req, res) => {
  const walk = await WalkPathService.find(req.params.id);
  res.send("data", { data: walk });
});

router.post("/", async (req, res) => {
  const walk = await WalkPathService.add(req.body);
  res.send(walk);
});

router.delete("/:id", async (req, res) => {
  const walk = await WalkPathService.del(req.params.id);
  res.send("walk");
});

router.post("/:id/composition", async (req, res) => {
  const walkpath = await WalkPathService.find(req.params.id);
  const slot = await SlotService.find(req.body.slot);
  await WalkPathService.composed(walkpath, slot);

  res.send(walkpath);
});

module.exports = router;
