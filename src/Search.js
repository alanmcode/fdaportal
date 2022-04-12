import React from "react";
import {Link} from "react-router-dom"

const Search = () => {
    return (
    <div id="searchContainer">
        <input className="searchBox" type='text' placeholder='Enter name'></input>
        <Link id="search_btn" to= '/searchResults'>Search</Link>  
    </div>
    )
  }
  
  export default Search