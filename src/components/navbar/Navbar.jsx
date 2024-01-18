import React from 'react'
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css'; 

const Navbar = () => {
  return (
    <div className='zanah__navbar'>
      <div className='zanah__navbar-links'>
        <div className='zanah__navbar-links_logo'>
          <img src={logo} alt="logo" />


        </div>
        <div className='zanah__navbar-links_container'>
          <p><a href="#home">Home</a></p>
         

          <p><a href="#zanah">What is Zanah</a></p>

          <p><a href="#possibility">Tech Solutions</a></p>

          <p><a href="#features">Features</a></p>
          <p><a href="#blog"></a>Research</p>




        </div>


      </div>

      
    </div>
  )
}

export default Navbar
