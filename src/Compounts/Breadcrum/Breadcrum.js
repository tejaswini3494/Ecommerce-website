import React from 'react'
// import Product from '../Pages/Product';
import "./Breadcrum.css"

export default function Breadcrum(props) {
    const {product}=props;
  return (
    <>
<div className='container breadcrum'>
    Home / Shop / {product.category} / {product.name}
</div>
    </>
  )
}
