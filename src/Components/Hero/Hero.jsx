import React from 'react'
import hero_img from '../../assets/images/hero1.jpg'
import './Hero.css'

const Hero = () => {
  return (

    <div>
      <div className="hero">
        <img src={hero_img} alt="" className='hero_img'/>
        <div className="hero_text">
          <h2>Find Your Perfect Stay – Guest Houses, Rentals & Homes!</h2>
          <p>Experience comfort and convenience with our selection of guest houses, rentals, and dream homes. Whether you're looking for a short getaway, a long-term rental, or a place to call home, we have the perfect option for you. Explore now and find your ideal space!</p>

        </div>
        <button className="hero_cta">Book an Inspection</button>

        </div>
      </div>

  )
}

export default Hero