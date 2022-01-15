const express = require("express");
const path = require("path");

const app = express();

// app.use("/")

app.get("/*", (req, res) => {
  res.send("");
});

app.listen(process.env.PORT || 5060, () => console.log("connect server ..."));
