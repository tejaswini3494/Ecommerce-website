import React from "react";
import "./Home.css"
import homeimg from "../Image/home.jpg"
export default function Home() {
  return (
    <>
      <div className="home-container container">
        <div className="home-left">
          <div className="home-heading">
            <h2>NEW</h2>
          
            <h3>COLLECTION</h3>
          </div>
          <p>The lates fasion trends online</p>
          <button className="btn">Shop Now</button>
        </div>
        <div className="home-right">
          <img src={homeimg} />
          
          
          
        </div>

       
      </div>
    </>
  );
}
