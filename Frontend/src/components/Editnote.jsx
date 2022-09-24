import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function Editnote(){
    const navigate= useNavigate();
    const id= useParams();
    const noteId= id.noteId;
    const token= localStorage.getItem("token")
    const [title, setTitle] = useState("");
    const [descp, setDescp] = useState("");
    const handleEdit=()=>{
        axios.put(`https://intense-depths-45535.herokuapp.com/notes/edit/${noteId}`,{title,descp},{
            headers:{
                'Authorization':`Bearer ${token}`
            } 
        }).then((res)=> {
            //console.log(res)
            alert(res.data)
            navigate("/notes")
        })
        .catch((err)=>console.log(err))
    }
    return(
        <div>
            <h1>Edit Note</h1>
            <br />
            <h3>Correcection for: {noteId}</h3>
            <br />
            <input type="text" 
            placeholder="new title"
            onChange={(e)=>setTitle(e.target.value)}
            />
            <br />
            <input type="text" 
            placeholder="new description"
            onChange={(e)=>setDescp(e.target.value)}
            />
            <br />
            <button onClick={handleEdit}>Update</button>

        </div>
    )
}