import React from 'react'
import './footer.css'; 
import gpt3Logo from '../../assets/logo.svg';
const Footer = () => {
  return (
    <div className='zanah__footer section__padding'>
      <div className="zanah__footer-heading">
        <h1 className="gradient__text">
          Do you need a tech solution in your business today?
        </h1>
      </div>
      <div className="zanah__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="zanah__footer-links">
        <div className="zanah__footer-links_logo">
          <img src={gpt3Logo} alt='logo'/>
          <p>Collergrove NewYork 182 Abujan, All rights reserved</p>
        </div>

        <div className="zanah__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Contacts</p>
        </div>

        <div className="zanah__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contacts</p>
        </div>

        <div className="zanah__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Zanah Tech</p>
          <p>Abuja street New York</p>
          <p>254-711115511</p>
          <p>info@zanahtech.com</p>
        </div>
      </div>
      
      <div className="zanah__footer-copyright">
        <p>2021 Zanah Technology. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
