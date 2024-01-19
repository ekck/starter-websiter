import React from 'react'
import './zanah.css'
import Feature from '../../components/feature/Feature'

const Zanah = () => {
  return (
    <div className='zanah__tech section__margin' id='zanah'>
      <div className='zanah__tech-feature'>

        <Feature title="What is Zanah Technology" text="An Information Technology Company passionate about applying technology soltions to every day challenges"/> 

      </div>

      <div className='zanah__tech-heading'>
        <h1 className="gradient__text">Information Technology solutions and services</h1>
        <p>Explore the library</p>
      </div>
      <div className='zanah__tech-container'>
      <Feature title="Software Development" text="We design and engineer computer programs, websites and systems that solve business problems "/> 

      <Feature title="Networking" text="Connecting point A to point B"/> 

      <Feature title="IOT" text="Internet of things is an emerging issue in the technology space and we are keen to see how we can apply it to various fields like agriculture and livestock"/> 


      </div>
      
    </div>
  )
}

export default Zanah
