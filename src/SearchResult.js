import React from "react";
import {Link} from "react-router-dom"

const SearchResults = () => {
    return (

    <div>
        <div id="searchContainer">
            <input className="searchBox" type='text' placeholder='Enter name'></input>
            <Link id="search_btn" to= '/searchResults'>Search</Link>  
        </div>

        <h3 id="searchh3">Here are your results:</h3>
        
        <div id="searchResultContainer">
        <h2>Adya Aggarwal</h2>
                <h4>UserID:</h4><p>adya123</p>
                <h4>Email:</h4><p>adya.aggarwal@fdm.com</p>
                <h4>Phone Number:</h4><p>9283529873</p>
                <h4>Address:</h4><p>Flat 6, ABC Street <br></br>XYZ Road <br></br>London</p>
                <Link id="message_btn" to='/searchResults'>Send a message</Link>  

        </div>
        
    </div>

    
    )

  }
  
  export default SearchResults