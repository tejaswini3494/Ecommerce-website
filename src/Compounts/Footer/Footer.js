import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import instagram from "../Image/instagram.jpg"
import twitter from "../Image/twitter.jpg"
import whatsapp from "../Image/whatsapp.jpg"

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
            <img src={instagram}/>
            </div>       
        <div className='whatsapp footer-icon'>
        <img src={whatsapp}/>
            </div>       
        <div className='twitter footer-icon'>
        <img src={twitter}/>
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
