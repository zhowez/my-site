const app = require("express")();

app.post("/api", (req, res) => {
  console.log(req.body);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(body);
});

module.exports = app;
