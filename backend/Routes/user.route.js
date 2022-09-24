const {Router}= require("express");
const bcrypt= require("bcrypt");
const jwt= require("jsonwebtoken");
require("dotenv").config();
const { UserModel } = require("../Models/user.model");



const UserController= Router();
UserController.post("/register",async(req,res)=>{
    const user= await UserModel.findOne({email: req.body.email});
    if(user){
        res.send("user already registered")
    }else{
        const {email,password}= req.body ;
        bcrypt.hash(password,6).then(async(hash)=>{
            const newUser= new UserModel({email,password:hash});
            await newUser.save();
            res.send("Registration successful")
        }).catch(()=>{
            res.send("Something went wrong. Plaese try after some time")
        })
    }
})
UserController.post("/login",async(req,res)=>{
    let {email,password}= req.body;
    let Exist= await UserModel.findOne({email});
    if(Exist){
        let hash= Exist.password;
    bcrypt.compare(password,hash,(err,result)=>{
        if(result){
            var token = jwt.sign({id:Exist._id},process.env.SECURITY,{expiresIn:'10h'});
            res.send({message:"Login Sucessful" , token:token})
        }else{
            res.status(401).send("invalid creds")
        }
    })
    }
    else{
        res.status(404).send("No user found")
    }
})

module.exports= {
    UserController
}