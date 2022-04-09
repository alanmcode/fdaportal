import React from "react";
import './style.css'
import {Link} from "react-router-dom"

const Form = () => {
    return (
      <div className='blogContainer'>
          <form className='formBox'>
              <h1 style={{textAlign:"center", color:"white"}}>Edit Details</h1>
        
              <section className='everythingInBox'>
                  <div className='FourBoxes'>
                      <div>
                          <input className='PASSchange' type="password" placeholder='Please enter the new Password' />
                      </div>
                      <div>
                          <input className='PASSchange' type="password" placeholder='Please confirm the new Password' />
                      </div>
                  </div>
                  <div className='bothBtns'>
                      <button className='submitBtn' style={{color:"white"}} type="submit" value="POST">SUBMIT</button>
                      <button className='cancelBtn' style={{color:"white"}} type="reset">CANCEL</button>
                  </div>
              </section>
          </form>
      </div>
    )
  }
  
  export default Form