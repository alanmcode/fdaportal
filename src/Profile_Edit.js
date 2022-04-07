import React from "react";
import './style.css'
import {Link} from "react-router-dom"

const Form = () => {
    return (
      <div className='blogContainer'>
          <form className='formBox'>
              <h1 style={{textAlign:"center", color:"white"}}>Edit Details</h1>
              <Link to = "/">Home</Link><br></br>
              <Link to = "/dashboard">Dashboard</Link><br></br>
              <section className='everythingInBox'>
                  <div className='FourBoxes'>
                      <div>
                          <input className='IDchange' type="text" placeholder='Please enter new ID' />
                      </div>
                      <div>
                          <input className='EMAILchange' type="text" placeholder='Please enter new Email' />
                      </div>
                      <div>
                          <input className='PASSchange' type="password" placeholder='Please enter the new Password' />
                      </div>
                      <div>
                          <input className='NUMBERchange' type="text" placeholder='Please enter the new Phone Number' />
                      </div>
                      <div>
                          <input className='ADDRESSchange' type="text" placeholder='Please enter the new Address' />
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