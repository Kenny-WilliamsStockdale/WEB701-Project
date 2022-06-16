/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React from 'react'
import { FaGgCircle } from 'react-icons/fa';
import { FaGratipay } from 'react-icons/fa';
import { FaMegaport } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import landingPic from '../Imgs/landing-picture.jpg'
import './Landing.css'
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */

const Landing = () => {
  return (
    <><div className="landing-top">
      <div className="intro-text-container">
        <h1 className="intro-text-top">Welcome to <br /> Stuff and Things Clothing Charity</h1>
        <Link to="/Product">
          <button className="btn btn-primary btn-lg" id="landing-shopNow-btn">Shop Now</button>
        </Link>
      </div>
      <div className="landing-pic-container">
        <img className="landing-pic" src={landingPic} />
      </div>
    </div>
      <div className="landing-mid">
        <h1 className="intro-text-mid-title">Mission</h1>
        <div className="intro-text-container2">
          <div className="intro-text-container-left">
            <FaGgCircle className="intro-text-mid-icon" />
            <p className="intro-text-mid">Our shop is open 7 days a week 9am to 5pm, and select evenings as announced on social media.</p>
          </div>
          <div className="intro-text-container-mid">
            <FaGratipay className="intro-text-mid-icon" />
            <p className="intro-text-mid">Our heart is to impact people in New Zealand, showing them tangible value through clothing.</p>
          </div>
          <div className="intro-text-container-right">
            <FaMegaport className="intro-text-mid-icon" />
            <p className="intro-text-mid">Our mission at Stuff and Things Clothing Charity is providing clothes for those in need with understanding, care and thoughtfulness.</p>
          </div>
        </div>
      </div></>
  )
}

export default Landing