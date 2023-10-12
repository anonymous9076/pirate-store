import React from 'react'
import "./SigninPage.css"
import {Link} from 'react-router-dom'

function SigninPage() {
  return (
    <div>
         <div className='signin-body'>
            <div className='signin-secA'>
                <h3>SiGn In PaGe</h3>
                <label>E-Mail</label>
                <br></br>
                <input className='enter' type='email' name="email" placeholder='Enter Your Email'></input>
                <br></br>
                <label>Password</label>
                <br></br>
                <input className='enter' type='password' name="password" placeholder='Enter Your Password'></input>
                <br></br>
                <label>Confirm Password</label>
                <br></br>
                <input className='enter' type='text' name=" confirmpass" placeholder='Enter Your Password'></input>
                <button className='signin-btn' type='submit'>Submit</button>
               <h6> Already have an Account</h6>
                <Link style={{textDecoration:'none'}} to='/login'><h5 id='tologin'>Go to Login Page</h5></Link>
            </div>
        </div>
    </div>
  )
}

export default SigninPage