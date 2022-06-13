const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const Item = require("./models/item.model.js");
const Phong = require("./models/room.model.js");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// app.get("/",(req,res)=>{
//     res.json({message:"Heloo Worl"})
// })
module.exports=app;