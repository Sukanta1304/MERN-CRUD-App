const express= require("express");
const cors= require("cors");
require('dotenv').config();
const { connection } = require("./config/db");
const { UserModel } = require("./Models/user.model");
const { UserController } = require("./Routes/user.route");
const { Authentication } = require("./Middlewares/Authentication");
const { NotesController } = require("./Routes/notes.route");

const PORT= process.env.PORT|| 8000 ;
const app= express();
app.use(express.json());
app.use(cors());


app.get("/",async(req,res)=>{
    const data =await UserModel.find();
    res.send(data)
})

app.use("/user",UserController)
app.use(Authentication);
app.use("/notes",NotesController)
app.listen(PORT, async()=>{
    try{
        await connection;
        console.log("DB Connected")
    }
    catch{
        console.log("DB connection Failed");
    }
    console.log(`Server started at port ${PORT}`);
})


// deployed link: https://intense-depths-45535.herokuapp.com/

