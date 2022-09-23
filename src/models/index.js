const express= require("express");
const mongoose = require('mongoose');
require('dotenv').config();
const userRoute =require("./routes/user")


const app=express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Server listening to", port));

app.use(express,json());
app.use("/apli", userRoute);

app.get("/", (req, res) => {
    res.send("Welcome to my API")
});