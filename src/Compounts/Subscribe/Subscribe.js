import React from "react";
import "./Subscribe.css";
import girlflower from "../Image/girls-flower.jpg"


export default function Subscribe() {
  return (
    <div className="subscribe-container container">
      <div className="subscribe">
        <h6> Get Offers On Your Email </h6>
        <p> Subscribe and stay Update </p>
        <div className="subscribe-details">
          <input type="email" placeholder=" Your email id" />
          <button className="btn">Subscribe</button>
        </div>
      </div>

      <div className="subscribe-img">
        <img src={girlflower}/>
      </div>
    </div>
  );
}
