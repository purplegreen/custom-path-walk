const express = require("express");
const router = express.Router();

const WalkPathService = require("../services/walkpath-service");

router.get("/all", async (req, res) => {
  const walkpaths = await WalkPathService.findAll();
  res.render("list", { items: walkpaths });
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

module.exports = router;
