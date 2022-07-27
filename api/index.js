const app = require("express")();

app.post("/api", (req, res) => {
  const body = req.body;
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(body);
});

module.exports = app;
