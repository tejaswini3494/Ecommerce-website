import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pasw, setPasw] = useState("");

  const Handleform = (e) => {
    e.target.name ==="Username"
      ? setName(e.target.value)
      : setEmail(e.target.value)
  };
  const HandleformB = (e) => {
    setPasw(e.target.value);
  };
  return (
    
    <>
    <div className='login-container'>
      
        <div className='signin-page login-signin' id='signup'>
        <h2>Sign Up</h2>
  
        <form action="">
          <label>Username <span>*</span></label>
          <input type="text" name="Username" value={username} onChange={Handleform} />
          <br />
          <label>Email <span>*</span></label>
          <input type="text" name="Email" value={email} onChange={Handleform} />
          <br />
          <label>Password <span>*</span></label>
          <input type="password" value={pasw} onChange={HandleformB}/>
          <br />
          <div className="link-menu">
          <p>If you have already accout </p>
        
         <Link to="/login">login</Link>
         </div>
          <input type="submit" value="Login" className='login-btn'/>
        </form>
        </div>
  
        
        </div></>
  )
}
