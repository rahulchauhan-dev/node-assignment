const express = require("express");
const Joi = require("joi");

const validator = require("express-joi-validation").createValidator({});

const querySchema = Joi.object({
  name: Joi.string().required(),
});

const app = express();

const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is runnning....");
});

app.post("/add", validator.query(querySchema), (req, res) => {
  res.send(`Hello ${req.query.name}!`);
});

app.listen(port, () => {
  console.log("Server Started..");
});
