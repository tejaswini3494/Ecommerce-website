import React from "react";

import Data2 from "../Assets/Data2";

import Item from "../Item/item";

export default function Newcollection() {
  return (
    <div className="container ">
      <h2 className="text">New Collections</h2>
      <div className="item-container">
        {Data2.map((item, i) => {
          return (
            <>
              <Item
                key={i}
                img={item.img}
                name={item.name}
                price={item.price}
                id={item.id}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
