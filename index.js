const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();

app.use(morgan("combined"));

app.get("/", (_, res) => {
  res.send("Hello GET");
});

app.use("/static", express.static(path.join(__dirname, "public")));

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`This app is running on ${host}:${port}`);
});
