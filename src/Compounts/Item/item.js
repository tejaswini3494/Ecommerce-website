import React from "react";
// import Data from '../Assets/data'
import "./item.css";
import { Link } from "react-router-dom";

export default function item(props) {
  return (
    <>
      <div className="item-box">
        <Link to={`/product/${props.id}`}> <img src={props.img} alt="img" /></Link>
        <p>{props.name}</p>
          <p>${props.price}</p>
    </div>
    </>
  );
}
