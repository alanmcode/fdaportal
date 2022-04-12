import React from "react";
import {Link} from "react-router-dom"

const Form = () => {
    return (
      <div className='editContainer'>
          <form className='formBox'>
              <h1 style={{textAlign:"center", color:"white"}}>Edit Details</h1>
            
              <section className='everythingInBox'>
                  <div className='FourBoxes'>
                      <div>
                          <input id="edit-det-box" className='subject' type="text" placeholder='Please enter new ID'/>
                      </div>
                      <div>
                          <input id="edit-det-box" className='subject' type="email" placeholder='Please enter new Email' />
                      </div>
                      <div>
                          <input id="edit-det-box" className='subject' type="number" placeholder='Please enter the new Phone Number' />
                      </div>
                      <div>
                          <input id="edit-det-box" className='subject' type="text" placeholder='Please enter the new Address' />
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