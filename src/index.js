const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.get("/healthcheck", (req, res) => {
  res.json({
    all_systems: "up",
  });
});

app.listen(process.env.PORT ?? 8080, () => {
  console.log(`Application running on port ${process.env.PORT ?? 8080}`);
});
