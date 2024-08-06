import React, { useContext } from "react";
import { ShopcontextMe } from "../Context/Shopcontext";
import "./css/Cart.css";
import Lates from "../Lates/Lates";

export default function Cart() {
  const { allProduct, cartItems, removeFromCart } = useContext(ShopcontextMe);
  return (
    <>
    <div className="cartitems container">
      <div className="cartitems-format-main ">
      
        {allProduct.map((e) => {
          if (cartItems[e.id] > 0) {
            return (<>
              <div className="cartitems-format">
                <img src={e.img} />
                <div className="itemcart-detail">
                  <p>{e.name}</p>
                  <div className="cart-item-price">
                  <p className="cart-new-price">Price : ${e.price}</p>
                 <p className="cart-old-price"> ${e.oldPrice}</p>
                 </div>
                  {/* <button className="cartitem-qantity"> */}
                  {/* {cartItems[e.id]} */}
                  <input type="number" placeholder="Qty:1"></input>
                  {/* </button> */}
                  {/* <p>{e.price * cartItems[e.id]}</p> */}
                  <button
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                  >
                    Remove
                  </button>
                 
                </div>
               
              </div>
               <hr/>
               
               </>
            );
          }

        })}
      </div>
      <div className="cartitems-price-details-main">
        <h1>PRICE DETAILS</h1>
        <div className="cartitems-price-details">
          <p>Price</p>
          <p>Discount</p>
          <p>Delivery Chargrs</p>
          <p>Total Amount</p>
        </div>
      </div>
      
    </div>
    <Lates/>
    </>
  );
}
