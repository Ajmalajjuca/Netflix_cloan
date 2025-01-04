import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { signin, signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  
  const [signInState, setSignInState] = useState("Sign In")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loding, setLoding] = useState(false)

  const userAuth = async (event) => {
    event.preventDefault();
    setLoding(true)
    if (signInState === "Sign In") {
      await signin(email, password)
    } else {
      await signup(name, email, password)
    }
    setLoding(false)

  }
  return (
    loding ? <div className="login_spinner">
      <img src={netflix_spinner} alt="" />
    </div> :
      <div className='login'>
        <img src={logo} className='login_logo' alt="" />
        <div className="login_form">
          <h1>{signInState}</h1>
          <form action="">
            {signInState === "Sign Up" ?
              <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Your name' /> : <></>}

            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' />
            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
            <button onClick={userAuth} type='submit'>{signInState}</button>
            <div className="form_help">
              <div className="remember">
                <input type="checkbox" />
                <label htmlFor="">Remember</label>
              </div>
              <p>Need Help</p>
            </div>
          </form>
          <div className="form_switch">
            {signInState === "Sign Up" ? <p>Already have account? <span onClick={() => { setSignInState("Sign In") }}>Sign In Now</span></p> : <p>New to Netfilx? <span onClick={() => { setSignInState("Sign Up") }}>Sign Up Now</span></p>}


          </div>
        </div>
      </div>
  )
}

export default Login
