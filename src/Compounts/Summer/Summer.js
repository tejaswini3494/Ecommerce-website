import React from "react";
import "./Summer.css"
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
        <img src="Image/brand.jpg" />
        <img src="Image/223.jpg" />
      </div>
    </div>
  );
}
