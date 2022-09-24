import { Link, useNavigate } from "react-router-dom";

export default function Navbar(){
    const navigate= useNavigate()

    const token = localStorage.getItem("token") || ""

    const handleLogout=()=>{
        if(token){
            localStorage.removeItem("token");
            navigate("/signup");
        }else{
            navigate("/login")
        }
        
    }
    return(
        <div>
            <h3><Link to="/signup">Signup</Link></h3>
            {/* <h3><Link to="/login">Login</Link></h3> */}
            <h3><Link to="/notes">Notes</Link></h3>
            <h3><Link to="/addnotes">Add new note</Link></h3>
            <button onClick={handleLogout}>{token?"Logout":"Login"}</button>
        </div>
    )
}