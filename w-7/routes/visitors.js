const express = require("express");
const router = express.Router();

const VisitorService = require("../services/visitor-service");
const WalkPathService = require("../services/walkpath-service");

router.get("/all", async (req, res) => {
  const visitors = await VisitorService.findAll();
  res.render("list", { items: visitors });
});

router.get("/all/json", async (req, res) => {
  const visitors = await VisitorService.findAll();
  res.send(visitors);
});

router.get("/:id", async (req, res) => {
  const visitor = await VisitorService.find(req.params.id);
  res.send(visitor);
});

router.get("/:id/json", async (req, res) => {
  const visitor = await VisitorService.find(req.params.id);
  if (!visitor) res.status(404);
  res.send(visitor);
});

router.post("/", async (req, res) => {
  const visitor = await VisitorService.add(req.body);
  res.send(visitor);
});

router.delete("/:id", async (req, res) => {
  const visitor = await VisitorService.del(req.params.id);
  res.send(visitor);
});

router.post("/:id/walkpaths", async (req, res) => {
  const visitor = await VisitorService.find(req.params.id);
  const walkpath = await WalkPathService.find(req.body.walkpath);
  await VisitorService.composes(visitor, walkpath);

  res.send(visitor);
});

module.exports = router;
