const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const paymentRoute = require("./paymentRoute");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

mongoose
  .connect("mongodb://localhost:27017/paymentorder", {
    useFindAnyModify: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connected"))
  .catch(() => console.log("failed to connect with DB"));

app.use(express.json());
app.use(cors());

app.use("/api", paymentRoute);

app.listen(5000, () => {
  console.log("App is running at 5000 port");
});
