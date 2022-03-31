import React from "react";
import './style.css'

function Prev_Queries(){
    return(
        <div>
            <h1>Previous Queries</h1>
            <table id="prev_queries_tbl">
                <tr>
                    <th>Type</th>
                    <th>Date/Time</th>
                    <th>Query</th>
                    <th>Solved</th>
                    <th>Solved by</th>
                    <th>Rating</th>
                </tr>

                <tr>
                    <td>General</td>
                    <td>15-03-2022 15:20</td>
                    <td>Need help with editing personal details</td>
                    <td>Yes</td>
                    <td>Adya Aggarwal</td>
                    <td>5/5</td>
                </tr>

                <tr>
                    <td>Technical</td>
                    <td>01-02-2022 11:40</td>
                    <td>Can not share screen</td>
                    <td>Yes</td>
                    <td>Adya Aggarwal</td>
                    <td>4/5</td>
                </tr>

            </table>
        </div>
    )
}

export default Prev_Queries;