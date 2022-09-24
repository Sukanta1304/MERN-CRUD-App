const jwt= require("jsonwebtoken");

const Authentication= (req,res,next)=>{
    if(!req.headers.authorization){
        res.send("Please login first")
    }
    else{
        const token= req.headers.authorization.split(" ")[1];
    jwt.verify(token,process.env.SECURITY,(err,decode)=>{
       if(err){
           res.status(401).send("You are not authorized")
       }
       else{
            req.body.id= decode.id
           next();
       } 
    })
    }  
}

module.exports= {
    Authentication
}