const express = require("express");
const router = express.Router();

const SlotService = require("../services/slot-service");
const WalkPathService = require("../services/walkpath-service");

router.get("/all", async (req, res) => {
  const slots = await SlotService.findAll();
  res.render("list", { items: slots });
});

router.get("/:id", async (req, res) => {
  const slot = await SlotService.find(req.body);
  res.send(slot);
});

router.post("/", async (req, res) => {
  const slot = await SlotService.add(req.body);
  res.send(slot);
});

router.delete("/:id", async (req, res) => {
  const slot = await SlotService.del(req.params.id);
  res.send("slot");
});

router.post("/:id/componetOf", async (req, res) => {
  const slot = await SlotService.find(req.params.id);
  const walkpath = await WalkPathService.find(req.body.walkpath);
  await WalkPathService.composed(slot, walkpath);

  res.send("walkpath");
});

module.exports = router;
