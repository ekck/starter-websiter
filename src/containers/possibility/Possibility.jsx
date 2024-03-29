import React from 'react'
import './possibility.css'; 
import PossibilityImage from '../../assets/possibility.png';


const Possibility = () => {
  return (
    <div className='zanah__possibility section__padding' id='possibility'>
        <div className="zanah__possibility-image">
          <img src={PossibilityImage} alt="possibility" />
          </div>    

          <div className="zanah__possibility-content">
            <h4>
              Request Early Access to get started
              </h4>
              <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
              <p>Yet bed any for travelling assistance </p>
              <h4>Request Early Access to Get Started</h4>
              </div>  
    </div>
  )
}

export default Possibility
