import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// importing our components
import SiteNavbar from './components/SiteNavbar'
import Home from './components/Home'
import CharacterIndex from './components/CharacterIndex'
import CharacterShow from './components/CharacterShow'




function App() {
  return (
    <div className='site-wrapper'>
      <BrowserRouter>
        <SiteNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character" element={<CharacterIndex />} />

          <Route path="/character/:characterId" element={<CharacterShow />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
