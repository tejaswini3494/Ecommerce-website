import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
export default function Footer() {
  return (
    <>
   <div className='footer-wrapper'>
    <div className="footer-content">
      <Link to="/" className="brand-logo">SWIFFEE</Link>
      
      <ul  className="footer-link">
        <li>Company</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className='footer-social-icons'>
        <div className='Instagram footer-icon'>
            <img src="/Image/instagram.jpg"/>
            </div>       
        <div className='whatsapp footer-icon'>
        <img src="/Image/whatsapp2.jpg"/>
            </div>       
        <div className='twitter footer-icon'>
        <img src="/Image/twitter3.jpg"/>
            </div>       
      </div>


     
    </div>
    <div className='subfooter'>
        <p>Copyright @ 2024 All Rigth Reserved.</p>
      </div>
   </div>
   </>
  )
}
