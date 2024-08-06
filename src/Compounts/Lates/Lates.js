import React from "react";
import Data from "../Assets/data";

import Item from "../Item/item";

export default function Lates() {
  return (
    <div className="container ">
      <h2 className="text">Popular In Women</h2>
      <div className="item-container">
        {Data.map((item, i) => {
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
