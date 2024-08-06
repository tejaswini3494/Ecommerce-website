import React, { useState } from "react";
import "./css/Login.css";
import { Link } from "react-router-dom";

export default function LoginSignup() {
  const [email, setEmail] = useState("");
  const [pasw, setPasw] = useState("");

  const Handleform = (e) => {
    e.target.name === "Email"
      ? setEmail(e.target.value)
      : setPasw(e.target.value);
  };

  return (
    <>
      <div className="login-container">
        <div className="login-page login-signin" id="login">
          <h2>Login</h2>

          <form action="">
            <label>
              Email <span>*</span>
            </label>
            <input
              type="text"
              name="Email"
              value={email}
              onChange={Handleform}
            />
            <br />
            <label>
              Password <span>*</span>
            </label>
            <input type="password" value={pasw} onChange={Handleform} />
            <br />
            <div className="link-menu">
            <p>If you not have accout </p>
            <Link to="/signup" className="toplink">Sign Up</Link>
            </div>

            <input type="submit" value="Login" className="login-btn" />
          </form>
        </div>
      </div>
    </>
  );
}
