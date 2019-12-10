const express = require("express");
const cors = require("cors");
require("dotenv").config();
//Grapql imports
const grapql = require('graphql').graphql;
const graphqlHTTP = require('express-graphql');

const app = express();
const port = process.env.PORT || 5000;
const usersRouter = require("./routes/users");

//MongoDB connection setup
const mongoose = require("mongoose");
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established!");
});

app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
app.use("/users", usersRouter);
