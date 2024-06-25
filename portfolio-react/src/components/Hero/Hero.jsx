import React from 'react'
import './Hero.css'
import profileImg from  '../../assets/profile_img.svg'
const Hero = () => {
  return (
    <div className="hero">
      <img src={profileImg} alt="" />
      <h1>
        <span>I am Pankaj Jaiswal</span> Problem Solver
      </h1>
      <p>Test Description</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero
