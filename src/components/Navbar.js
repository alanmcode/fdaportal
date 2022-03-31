import React,{useState} from "react";
import { Link } from "react-router-dom";
import './navbar.css'

function Navbar(){
    return(
        <>
            <nav>
                <button>Logout</button>
                <select>
                    <option selected defaultChecked disabled>Language</option>
                    <option>English</option>
                    <option>French</option>
                    <option>Spanish</option>
                    <option>Hindi</option>
                </select>
            </nav>      
        </>
    )
}

export default Navbar