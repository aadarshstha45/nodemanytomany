require("dotenv").config();

const express = require("express");
const router = require("./router");
const bodyparser = require("body-parser");
const db = require("./db");
const model = require("./studentmodel");

const port = process.env.PORT || 4000;

const app = express();

app.use(bodyparser.json());

app.use(router);

app.listen(4000, () => {
  console.log(`Running on http://localhost:${port}`);
  console.log("checking");
});
