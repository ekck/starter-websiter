import React from 'react'
import './header.css'; 
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='zanah_header section__padding' id='home'>
      <div className='zanah__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing at Zanah Technology</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <div className='zanah__header-content__input'>

      <input type="email" placeholder='Your email address' />
      <button type='button '>Get Started</button>
      </div>

      <div className="zanah__header-content__people">
        <img src={people} />
      </div>
      </div>
      
    </div>
  )
}

export default Header
