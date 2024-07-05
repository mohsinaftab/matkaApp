const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/app_access", (req, res) => {
  res.status(200).send({ data: true, status: true  , message:"LALAL"});
});
app.get("/", (req, res) => {
  res.status(200).send({ data: true, status: true  , message:"LALAL"});
});
app.listen(PORT, () => {
  console.log(`Our app is listening at Port ${PORT}`);
});
