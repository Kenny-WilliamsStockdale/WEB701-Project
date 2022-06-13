/* -------------------------------------------------------------------------- */
/*                               Import Section                               */
/* -------------------------------------------------------------------------- */
import React from 'react'
import landingPic from '../Imgs/landing-picture.jpg'
import './Landing.css'
/* -------------------------------------------------------------------------- */
/*                               Layout Section                               */
/* -------------------------------------------------------------------------- */

const Landing = () => {
  return (
    <><div className="landing-top">
      <div className="intro-text-container">
        <h1 className="intro-text">Welcome to Stuff and Things Clothing Charity</h1>
      </div>
      <div className="landing-pic-container">
        <img className="landing-pic" src={landingPic} />
      </div>
    </div>
      <div className="landing-mid">
        <h1 className="intro-text">We are a non-profit organization that provides clothing to the homeless people in the United States.</h1>
      </div></>
  )
}

export default Landing