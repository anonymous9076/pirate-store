import React from 'react'
import "./LoginPage.css"
import {Link} from 'react-router-dom'
function LoginPage() {
    return (
        <div className='login'>

            <div className='login-body'>
                <div className='login-secA'>
                    <h2>LoGiN PaGe</h2>
                    <label>E-Mail</label>
                    <br></br>
                    <input className='enter' type='email' name="email" placeholder='Enter Your Email'></input>
                    <br></br>
                    <label>Password</label>
                    <br></br>
                    <input className='enter' type='password' name="password" placeholder='Enter Your Password'></input>
                    <br></br>
                    <p>Forget Password </p>
                    <button className='login-btn' type='submit'>Submit</button>
                    <h6> New on Pirate Store?</h6>
                    <Link  to='/signin'  style={{textDecoration:'none'}}><h5 id='tosignin'>Create a new Account</h5></Link>
                    <div className="google-log">
                        Login with Google
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage