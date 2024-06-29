const express = require("express");
const app = express();

app.post("/app_access", (req, res) => {
  res.status(200).send({ data: true, status: true });
});

app.listen(3000, () => {
  console.log("Our app is listening at Port 3000");
});
