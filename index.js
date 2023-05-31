// Import dependence
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');

require('dotenv').config()

const port = 3030;
const app = express();

// Catch body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const Routes = require("./Routers/routes.js");

app.use(express.json());

const corsOption = {
  origin: "*",
  method: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  credentials: true
};

app.use(cors(corsOption));

//configure options to connect to mongodb
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Conection to MongoDB
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, connectionOptions)
  .then(() =>
    console.log("***---Successful connection to the data base---***"))
  .catch((err) =>
    console.error(err));

app.use("/App", Routes);

app.listen(port, () => {
  console.log("***---Successful connection to the port---***");
  console.log("http://localhost:3030/App")
})