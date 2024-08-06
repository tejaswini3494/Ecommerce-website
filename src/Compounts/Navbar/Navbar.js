import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuopen, setMenuOpen] = useState(false);
  const get = () => {
    setMenuOpen(!menuopen);
  };
  return (
   <>
   <nav className='nav-wrapper'>
    <div className="nav-content">
      <Link to="/" className="brand-logo">SWIFFEE</Link>
     
     
      
      <ul className={menuopen ? "open" : ""}>
        <li><Link to="/">Shop</Link></li>
        <li><Link to="/mens">Men</Link></li>
        <li><Link to="/womens">Women</Link></li>
        <li><Link to="/kids">Kids</Link></li>
      </ul>
      

      <div className='nav-login'>
        
       <Link to="/login"><button  className='btn'>Login</button></Link> 
       <Link to="/cart"><img src="\Image\cart9.jpg" alt='cart'/></Link>
        <div className='nav-cart-count'>0</div>
        
       
      </div>
       <div className="menu" onClick={get}>
            <span></span>
            <span></span>
            <span></span>
            
          </div>
          
      
    </div>
   </nav>
   </>
  )
}
