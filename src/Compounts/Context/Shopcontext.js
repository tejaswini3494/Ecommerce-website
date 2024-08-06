import React, { createContext, useState} from 'react'
// import allProduct from '../Assets/Allproduct';
import allProduct from '../Assets/Allproduct';


 const ShopcontextMe=createContext(null);
 const getDefaulatCart=()=>{
  let cart={};
  for (let index = 0; index < allProduct.length+1; index++) {
    cart[index]=0;
    
    
  }
  return cart;
}

//  console.log(allProduct);
export default function Shopcontext(props) {
  const [cartItems,setCartItems]=useState(getDefaulatCart())
  console.log(cartItems);


const addToCart=(itemId)=>{
  setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  console.log(cartItems);
}

const removeFromCart=(itemId)=>{
  setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}
const contextValue={allProduct,cartItems,addToCart,removeFromCart};
  return (
 
    <ShopcontextMe.Provider value={contextValue} >
        {props.children}
    </ShopcontextMe.Provider>
  
  )
}
export {ShopcontextMe};