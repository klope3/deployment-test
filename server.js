const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ message: "I'm deployed!" });
});

app.listen(3001);
