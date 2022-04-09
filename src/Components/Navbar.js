import React,{useState} from "react";
import { Link } from "react-router-dom";
import './navbar.css'
import fdm from '../img/fdm_logo.png';

function Navbar(){
    return(
        <>
            <nav>
                <img src = {fdm}/>
                <select>
                    <option selected defaultChecked disabled>Language</option>
                    <option>English</option>
                    <option>French</option>
                    <option>Spanish</option>
                    <option>Hindi</option>
                </select>
                 
                <Link class = 'nav_btns' to = "/login">Logout</Link>
                <Link class = 'nav_btns' to = "/">Home</Link>

                

            </nav>      
        </>
    )
}

export default Navbar