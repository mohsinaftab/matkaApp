const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.post("/app_access", (req, res) => {
  res.status(200).send({ data: true, status: true });
});

app.listen(PORT, () => {
  console.log(`Our app is listening at Port ${PORT}`);
});
