import React from "react";
import {Link} from "react-router-dom"

function Profile_Edit(){
    return(
        <div>
            <h1>Edit your profile</h1>
            <Link to = "/">Home</Link><br></br>
            <Link to = "/dashboard">Dashboard</Link><br></br>
    
        </div>
    )
}

export default Profile_Edit;