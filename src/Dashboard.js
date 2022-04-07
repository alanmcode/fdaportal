import moment from "moment";
import React, { useState } from "react";
import {Link} from "react-router-dom"

function Dashboard(){
    const [updates, setUpdates] = useState([
        {
            name: "Office Update",
            text: 'Please continue to wear face coverings at all times and use the free hand sanitizers provided at your work stations',
            updated: "HR Team",
            time: moment().subtract(Math.floor(Math.random()*31)+30, "minutes").format("HH:mm")
        },
        {
            name: "Maintenance",
            text: 'System will be down from 9:00pm BST to 11:00pm BST',
            updated: "Technician",
            time: moment().subtract(Math.floor(Math.random()*31)+30, "minutes").format("HH:mm")
        },
        {
            name: "Salary Update",
            text: 'Salary decreased by 1%',
            updated: "HR Team",
            time: moment().subtract(Math.floor(Math.random()*31)+30, "minutes").format("HH:mm")
        },
        {
            name: "Office time changes",
            text: 'The office will be closed from Sunday, 12th April 9:00pm to 13th April 9:00pm due to an incident',
            updated: "Team",
            time: moment().subtract(Math.floor(Math.random()*31)+30, "minutes").format("HH:mm")
        }
        ,
        {
            name: "MS Office",
            text: 'You have free access to MS Office. Please use your FDM email and password to access it.',
            updated: "Technician",
            time: moment().subtract(Math.floor(Math.random()*31)+30, "minutes").format("HH:mm")
        }
        ,
        {
            name: "Expense Claim Form",
            text: 'Your expense claim form has been approved. Click here to view ',
            updated: "HR Team",
            time: moment().subtract(Math.floor(Math.random()*31)+30, "minutes").format("HH:mm")
        }
        ,
        {
            name: "Office closure",
            text: 'The office will be closed from Sunday, 2nd April 10:00pm to 4th April 9:00am due to power outage',
            updated: "Team",
            time: moment().subtract(Math.floor(Math.random()*31)+30, "minutes").format("HH:mm")
        }
        
    ])


    return(
    <div class="container" id="updates"> 
        <div class="Dashboard">
        <div class="recent-updates">
            <h2>Recent Updates</h2>
                <div class = "updates">
                    {updates.map((value, index) => 
                        <div class="update" key={index}>
                            <div class="profile-photo">
                                <img src="http://cdn.onlinewebfonts.com/svg/img_568656.png" />
                            </div>
                            <div class="message">
                                <p><b>{value.name}</b> <br></br>  {value.text} from {value.updated}</p>
                                <small class="text-muted">{value.time}</small>
                            </div>
                        </div>
                    )}

                </div>
                <h2>Old Updates</h2>
                <div class = "updates">
                    <div class="update">
                        <div class="profile-photo">
                            <img src="http://cdn.onlinewebfonts.com/svg/img_568656.png"/>
                        </div>
                        <div class="message">
                            <p><b>HR Team</b> update 1 from admin</p>
                            <small class="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                    <div class="update">
                        <div class="profile-photo">
                            <img src="http://cdn.onlinewebfonts.com/svg/img_568656.png"/>
                        </div>
                        <div class="message">
                            <p><b>HR Team</b> update 1 from admin</p>
                            <small class="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                    <div class="update">
                        <div class="profile-photo">
                            <img src="http://cdn.onlinewebfonts.com/svg/img_568656.png"/>
                        </div>
                        <div class="message">
                            <p><b>HR Team</b> update 1 from admin</p>
                            <small class="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                    <div class="update">
                        <div class="profile-photo">
                            <img src="http://cdn.onlinewebfonts.com/svg/img_568656.png"/>
                        </div>
                        <div class="message">
                            <p><b>HR Team</b> update 1 from admin</p>
                            <small class="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div> 
    )
}

export default Dashboard;