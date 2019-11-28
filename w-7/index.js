const express = require("express");
const bodyParser = require("body-parser");

const walkpathRouter = require("./routes/walkpath");
const visitorRouter = require("./routes/visitors");
const slotsRouter = require("./routes/slots");

require("./mongo-connection");

const app = express();

app.set("view engine", "pug");
app.use(bodyParser.json());

app.use("/walkpath", walkpathRouter);
app.use("/slots", slotsRouter);
app.use("/visitors", visitorRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Server listening :) nice music");
});
