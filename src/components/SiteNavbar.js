//sitenavbar.js

import React from 'react'
import { Link } from 'react-router-dom'

// bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import useSound from 'use-sound'
import Gazorp from '../sounds/Gazorp.mp3'
import ThisIsnt from '../sounds/ThisIsnt.mp3'


// const SiteNavbar = () => (
//   <Navbar expand="sm" bg="dark">
//     <Container>

//       <Navbar.Brand>
//         <Link to="/">Home(will put logo here)</Link>
//       </Navbar.Brand>

//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse className='justify-content-end'>

//         <Nav.Item>
//         <Link className='btn btn-orange' to="/character" >Discover the characters</Link>
//         </Nav.Item>


//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
// )

const SiteNavbar = () => {

  const [GazorpPlay] = useSound(Gazorp)
  const [ThisIsntPlay] = useSound(ThisIsnt)

  return (
  <div className='nav-style'>
    <div className='home-logo'>
      <Navbar.Brand>
        <Link className='btn btn-homeAgain' to="/" onClick={GazorpPlay}></Link>
      </Navbar.Brand>
    </div>
    <div className='discover-button'>
      <Nav.Item>
        <Link className='btn btn-orange' onClick={ThisIsntPlay} to="/character" ></Link>
      </Nav.Item>
    </div>

  </div>
)

}

export default SiteNavbar