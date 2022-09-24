import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

export default function Notes(){
    const [notes, setNotes] = useState([]);
    const token= localStorage.getItem("token")
   // console.log(token);
    const getNotes=()=>{
        axios.get("https://intense-depths-45535.herokuapp.com/notes",{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        }).then((res)=>setNotes(res.data))
        .catch((err)=>console.log(err.response.data))
    }
//console.log(notes);
    useEffect(()=>{
        getNotes()
    },[])

    const handleDelete=(id)=>{
        axios.delete(`https://intense-depths-45535.herokuapp.com/notes/delete/${id}`,{
            headers:{
                'Authorization':`Bearer ${token}`
            } 
        }).then((res)=> getNotes())
        .catch((err)=>console.log(err))
    }

    return(
        <div>
            
            {token? 
            <>
            <h1>Notes</h1>
            <br />
            {notes && notes.map((e)=>
            <div key={e._id}>
                <h3>{e.title}</h3>
                <p>{e.descp}</p>
                <button><Link to={`/edit/${e._id}`} style={{color:"black"}}>Edit</Link></button>  <span/>
                <button onClick={()=> handleDelete(e._id)}>Delete</button>
            </div>
            )}
            {
                notes.length<1 && <h3>No notes present</h3>
            }
            </> : <Login/>
     } 
        </div>
    )
}