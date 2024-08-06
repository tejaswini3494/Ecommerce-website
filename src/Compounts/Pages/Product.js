import React, { useContext } from "react";
import { ShopcontextMe } from "../Context/Shopcontext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Breadcrum/Breadcrum";
import "./css/produc.css";
import Lates from "../Lates/Lates";

export default function Product() {
  const { allProduct } = useContext(ShopcontextMe);

  const { id } = useParams();

  const products = allProduct.find((curElem) => {
    return curElem.id === Number(id);
    // console.log(curElem.category);
  });
  // {console.log(product)}
  // console.log(Number(productId));
  const { addToCart } = useContext(ShopcontextMe);

  return (
    <>
      <Breadcrum product={products} />
      {console.log(products)}
      <div className="product-display container">
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={products.img} alt="product" className="product-image" />
            <img src={products.img} alt="product" className="product-image" />
            <img src={products.img} alt="product" className="product-image" />
            <img src={products.img} alt="product" className="product-image" />
          </div>
          <div className="productdisplay-img">
            <img
              src={products.img}
              alt="product"
              className="productdisplay-main-image"
            />
          </div>
        </div>
        <div className="productdisplay-right">
          <h1>{products.name}</h1>

          <div className="productdispaly-right-prices">
          <div className="productdisplay-right-price-new">
            ${products.price}
            </div>
            <div className="productdisplay-right-price-old">
              ${products.oldPrice}
            </div>
           
          </div>
          <div className="productdisplay-right-description">
            This printed shirt is made from lightweight fabric for an
            easy-breezy feel. It's cut to a regular fit and features a shirred
            section across the bodice for stylish texture. 
          </div>

          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-size-title">
              <div className="size"> <span>S</span></div>
              <div className="size"><span>M</span></div>
              <div className="size"> <span>L</span></div>
              <div className="size"> <span>XL</span></div>
              <div className="size"> <span>XXL</span></div>
            </div>

            <button
              onClick={() => {
                addToCart(products.id);
              }}
            >
              ADD TO CART
            </button>
            <div className="productdisplay-right-category">
              <p>
          
                <span>category</span> : Women , T-Shirt , Crop Top
              </p>
              <p>
             
                <span>category</span> : Modern , Latest
              </p>
            </div>
          </div>
        </div>
      </div>
      <Lates/>
    </>
  );
}
