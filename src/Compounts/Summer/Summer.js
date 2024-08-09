import React from "react";
import "./Summer.css"
import summberimg1 from "../Image/brand.jpg"
import summberimg2 from "../Image/223.jpg"
export default function Summer() {
  return (
    <div className="summer-container container">
      <div className="summer-left">
        <div className="summer-heading">
          <h2>SUMMER</h2>

          <h3>COLLECTION</h3>
        </div>
        <p> Get up to 25% OFF</p>
        <button className="btn">Shop Now</button>
      </div>
      <div className="summer-right">
        <img src={summberimg1}/>
        <img src={summberimg2}/>
      </div>
    </div>
  );
}
