import React from "react";
import {Link} from "react-router-dom"

function Chatbot(){
    return(
        <div>
            <h1>Chatbot</h1>
            <Link to = "/">Home</Link><br></br>
            <Link to = "/dashboard">Dashboard</Link><br></br>
    
        </div>
    )
}

export default Chatbot;