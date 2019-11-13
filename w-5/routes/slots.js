const express = require("express");
const router = express.Router();

const SlotService = require("../services/slot-service");

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

module.exports = router;
