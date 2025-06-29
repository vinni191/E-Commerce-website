import React from 'react'
import './Footer.css'
import footerLogo from "../Assets/logo.png"
import InstaIcon  from  '../Assets/instagram_icon.png'
import pinterestIcon from '../Assets/pintester_icon.png'
import whatsappIcon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
         <div className="top">
            <img src={footerLogo} alt="" />
            <h1>FASHION</h1>
         </div>
         <ul className='footer-menu'>
             <li>Company</li>
             <li>Products</li>
             <li>Offices</li>
             <li>About</li>
             <li>Contact</li>
         </ul>
         <div className="social-icons">
            <img src={InstaIcon} alt="" />
            <img src={pinterestIcon} alt="" />
            <img src={whatsappIcon} alt="" />
         </div>
         <hr className='footer-line' />
         <div className='Copyright'>
            <p>© Cpoyright All Rights Resreved</p>
         </div>
    </div>
  )
}

export default Footer