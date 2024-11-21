const express = require("express");
const { Sequelize } = require("sequelize")

const app = express();
const db = new Sequelize("postgres://postgres:postgres@localhost:5432/postgres")
const Memo = require("./models/memo")(db)

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.get("/memos", async (req, res) => {
  const myMemos = await Memo.findAll();
  // console.log(myMemos);
  res.json(myMemos);


})

app.get("/healthcheck", async (req, res) => {
  let db_connected = false;
  try {
    await db.authenticate();
    db_connected = true;
  }
  catch {
    db_connected = false;
  }

  res.json({
    all_systems: "up",
    db_connected
  });
});

app.listen(process.env.PORT ?? 8000, () => {
  console.log(`Application running on port ${process.env.PORT ?? 8000}`);
});