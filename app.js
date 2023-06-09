const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");
const userRoutes = require("./routes/user");
const app = express();
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

app.use("/user", userRoutes);

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
