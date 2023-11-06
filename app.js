require("dotenv").config();

const express = require("express");
const app = express();
require("./Db/connection")
const cors = require("cors");
const PORT = 6010;




app.get("/",(req,res)=>{
    res.status(200).json("Server Start")
})


app.listen(PORT,()=>{
    console.log(`Server is running on port no ${PORT}`)
})
