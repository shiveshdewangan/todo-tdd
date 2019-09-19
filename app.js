const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(res);
  res.status(200).json({
    id: 1,
    name: "Shivesh Dewangan"
  });
});

app.listen(3000, () => {
  console.log("SERVER IS RUNNING");
});
