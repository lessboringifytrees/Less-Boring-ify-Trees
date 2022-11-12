import React from 'react'
import NavBar from '../Home_Screen_Components/Navbar'
import AboutScreen_one from './AboutScreen_one'
import AboutScreen_two from './AboutScreen_two'
import Name from './Name'

function TreeScreen() {
  return (
    <div>
        <NavBar />
        <Name />
        <AboutScreen_one />
        <AboutScreen_two />
    </div>
  )
}

export default TreeScreen