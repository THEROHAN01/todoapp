require("dotenv").config;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res) =>{
    res.send("todo api is running");
});

// start the server 
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log("server has started"));
