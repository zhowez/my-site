const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api", (req, res) => {
  const body = req.body;
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(body.email);
});

module.exports = app;
