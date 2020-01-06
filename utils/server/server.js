/* eslint-disable no-undef */
const express = require("express");

const PORT = 1234;
const HOST = "127.0.0.1";

const app = express();
app.use("/recipes", express.static("_build"));

app.listen(PORT, HOST, () => {
  console.info(`Running on http://${HOST}:${PORT}/recipes`);
});
