const express = require("express");
const path = require("path");

const app = express();

// Phuong thuc get() phan hoi mot GET Request
app.get("/", (_, res) => {
  console.log("GET Request");
  res.send("Hello GET");
});

console.log(path.join(__dirname, "public"));
app.use("/static", express.static(path.join(__dirname, "public")));

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`This app is running on ${host}:${port}`);
});
