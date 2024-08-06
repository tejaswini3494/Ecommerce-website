import React, { useContext } from "react";
import Item from "../Item/item";
import "./css/Shopcategory.css"
import { ShopcontextMe } from "../Context/Shopcontext";

export default function ShopCategory(props) {
  const { allProduct } = useContext(ShopcontextMe);
  return (
    <div className="shop-category item-container container">
      {allProduct.map((item,i) => {
        if (props.category === item.category) {
          return (
            <>
              <Item  key={i} img={item.img} name={item.name} price={item.price} id={item.id} />
            </>
          );
        }else{
          return null;
        }
      })}
    </div>
  );
}
