import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

export default function Addnotes(){
    const [title, setTitle] = useState("");
    const [descp, setDescp] = useState("");
    //const data= JSON.stringify(title,descp)
    const token= localStorage.getItem("token");
    //console.log(title,descp);

    const navigate= useNavigate();

    const postNote=()=>{
        axios.post("https://intense-depths-45535.herokuapp.com/notes/create",{title,descp},{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        }).then((res)=> {
            console.log(res)
            alert(res.data)
            navigate("/notes")
        })
        .catch((err)=>console.log(err))
    }
    return(
        <div>
            {token? 
            <>
            <h1>Add Notes</h1>
            <input type="text" 
            placeholder="notes title"
            onChange={(e)=>setTitle(e.target.value)}
            />
            <br />
            <textarea type="text" 
            placeholder="notes description"
            onChange={(e)=>setDescp(e.target.value)}
            />
            <br />
            <button onClick={postNote}>Add Note</button>
            </> : <Login/>
}
        </div>
    )
}