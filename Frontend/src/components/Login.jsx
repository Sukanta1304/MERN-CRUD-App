import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate= useNavigate();
    const handleSubmit=()=>{
        axios.post("https://intense-depths-45535.herokuapp.com/user/login",{email,password})
        .then((res)=> {
            if(res.data.token){
                //console.log(res);
                localStorage.setItem("token", res.data.token);
                alert(res.data.message)
                navigate("/notes")
            }
        })
        .catch((err)=>{
            //console.log(err.response.data);
            alert(err.response.data);
        })
    }
    return(
        <div>
            <h1>Login</h1>
            <input type="text" 
            placeholder="Enter Email Id"
            onChange={(e)=>setEmail(e.target.value)}
             />
            <br />
            <input type="text" 
            placeholder="Enter Password"
            onChange={(e)=>setPassword(e.target.value)}
             />
            <br />
            <button onClick={handleSubmit}>Log in</button>
            <h4>Don't Have an account?<Link to="/signup"> Register here</Link></h4>
        </div>
    )
}