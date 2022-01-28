//Home.js

import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useSound from 'use-sound'
import LogoImg from '../images/RickLogo2.gif'
import Wubdub from '../sounds/Wubdub.mp3'


const Home = () => {

  const [wubPlay] = useSound(Wubdub) 

  return (

    <div className='home-background'>
    <div className="hero text-center">
      <div className='hero-overlay'>

        <h1 className='display-4'></h1>
        <div className="logo-wrapper">
          <img src={LogoImg} alt="" className="logo" />
        </div>

        {/* <p className='lead'>Guide to the Rick and Morty Universe</p> */}


        <Link to="/character" onClick={wubPlay} className='btn btn-home'></Link>

      </div>
    </div>
  </div>
)
}


export default Home