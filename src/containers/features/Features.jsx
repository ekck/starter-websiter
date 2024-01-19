import React from 'react'
import './features.css'; 
import Feature from '../../components/feature/Feature';

const featuresData = [
  {
    title: 'Software Development',
    text: 'We design and engineer computer programs, websites and systems that solve business problems '
  },
  {
    title: 'Networking',
    text: 'Connecting point A to point B'
  },
  {
    title: 'IOT',
    text: 'Internet of things is an emerging issue in the technology space and we are keen to see how we can apply it to various fields like agriculture and livestock'
  },
  
]


const Features = () => {
  return (
    <div className='zanah__features section__padding'>
        <div className="zanah__features-heading">
          <h1 className="gradient__text">
            The time to apply technology into your life is now ,
            to harness the power.
            Step into the future and make it possible
          </h1>
        </div>
        <div className="zanah__features-container">
            {featuresData.map((item, index) =>(
                <Feature />

             ))}
        </div>

    </div>
  )
}

export default Features
