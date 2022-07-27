const app = require("express")();
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api", (req, res) => {
  const body = req.body;

  fetch(
    "https://personal-site-a9a2c-default-rtdb.firebaseio.com/responses.json",
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "zach", email: "test@test.com" }),
    }
  );
  // if (!answer.ok) {
  //   return res.status(404);
  // }
  return res.status(200);
});

module.exports = app;
