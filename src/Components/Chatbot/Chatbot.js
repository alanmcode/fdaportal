import React from "react";
import './Chatbot.css'
import {Link} from "react-router-dom"
import Button from "../Button";

const Form = () => {
    return (
      <div className='blogContainer'>
          <form className='formBox'>
              <h1 style={{textAlign:"center", color:"white"}}>QUERY</h1>
              <section className='everythingInBox'>
                  <div className='twoBoxes'>
                      <div>
                          <input className='subject' type="text" placeholder='Subject' />
                      </div>
                      <div>
                          <textarea className='queryBox' placeholder='Please input your query here..'/>
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