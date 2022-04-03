import React from "react";
import {Link} from "react-router-dom"

function Dashboard(){
    return(
        <div>
            <h1>Dashboard</h1>
            <Link to = "/">Home</Link><br></br>
            <Link to = "/chatbot">Chatbot</Link><br></br>
        </div>
    )
}

export default Dashboard;