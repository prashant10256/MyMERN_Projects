require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4002;



//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
    res.status(200).json("Server Start")
})

app.listen(PORT, ()=>{
    console.log(`Server Is Running on Port No. ${PORT}`);
});