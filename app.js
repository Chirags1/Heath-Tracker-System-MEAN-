const express = require("express");
const mongoose = require("./config/mongoose-connection");
const cors = require("cors");
const bodyParser = require("body-parser");
const activityRoutes = require("./routes/activityRoutes");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", activityRoutes);

app.listen(3000, () => {
  console.log(`Server listening on PORT 3000`);
});
