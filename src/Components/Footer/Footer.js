import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram from '../Assets/instagram_icon.png'
import pinterest from '../Assets/pintester_icon.png'
import whatsappp from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=''/>
            <p>SHOPPER</p>
        </div>
        <ul className='footer_links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      <div className='footer_social_icon'>
        <div className='footer_icons_container'>
            <img src={instagram} alt=''/>
        </div>
        <div className='footer_icons_container'>
            <img src={pinterest} alt=''/>
        </div>
        <div className='footer_icons_container'>
            <img src={whatsappp} alt=''/>
        </div>
      </div>
      <div className='footer_copyright'>
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
