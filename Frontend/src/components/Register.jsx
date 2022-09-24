import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate= useNavigate();
    const handleSubmit=()=>{
        axios.post("https://intense-depths-45535.herokuapp.com/user/register",{email,password})
        .then((res)=> {
            console.log(res.data)
            alert(res.data);
            navigate("/login")
        })
        .catch((err)=>{console.log(err)})
    }
    return(
        <div>
            <h1>Register</h1>
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
            <button onClick={handleSubmit}>Sign UP</button>
            <h4>Already registered?<Link to="/login"> Please Login here</Link></h4>
            
        </div>
    )
}