const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("This text is coming from backend after writing deploy.sh code");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
