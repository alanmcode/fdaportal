import React,{useState} from "react";
import { Link } from "react-router-dom";
import './navbar.css'
import fdm from '../img/fdm_logo.png';
import china from '../img/china.png';
import uk from '../img/uk.png';

function Navbar(){
    return(
        <>
            <nav>
                <img src = {fdm} width = '50px' alt="FDM"></img>
                 
                <Link class = 'nav_btns' to = "/login">Logout</Link>
                <Link class = 'nav_btns' to = "/">Home</Link>
                
                <Link to = "/"><img src={uk}  class = 'lang_btns_c' width = '50px'/></Link>
                <Link  to = "/homeChinese"><img class = 'lang_btns_e' src={china}  width = '50px'/></Link>
                

                

            </nav>      
        </>
    )
}

export default Navbar