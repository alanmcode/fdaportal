import React from "react";
import './style.css'
import {Link} from "react-router-dom"

const Form = () => {
    return (
      <div className='blogContainer'>
          <form className='formBox'>
              <h1 style={{textAlign:"center", color:"white"}}>Request Leave</h1>
              <section className='everythingInBox'>
                  <div className='ThreeBoxes'>
                      <div>
                          <input required className='STARTdate' type="date" placeholder='Start of leave (DD/MM/YY)' />
                      </div>
                      <div>
                          <input required className='ENDdate' type="date" placeholder='End of leave (DD/MM/YY)' />
                      </div>
                      <div>
                          <input required className='REASON' type="text" placeholder='State reason for leave' />
                      </div>
                  </div>
                  <div className='bothBtns'>
                      <button className='submitBtn' style={{color:"white"}} type="submit" value="POST">SEND</button>
                      <button className='cancelBtn' style={{color:"white"}} type="reset">CANCEL</button>
                  </div>
              </section>
          </form>
      </div>
    )
  }
  
  export default Form
