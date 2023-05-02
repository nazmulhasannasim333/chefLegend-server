const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5100;
const chefCategories = require("./data/ChefCategories.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("ChefLegend is running");
});

app.get("/chefCategories", (req, res) => {
  res.send(chefCategories);
});
app.get("/chefCategories/:id", (req, res) => {
  const id = req.params.id;
  const details = chefCategories.find((chef) => chef.id === id);
  res.send(details);
});

app.listen(port, () => {
  console.log(`ChefLeged is running on port ${port}`);
});
