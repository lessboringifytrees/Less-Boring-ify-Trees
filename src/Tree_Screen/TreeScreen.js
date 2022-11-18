import React from 'react'
import Footer from '../Home_Screen_Components/Footer'
import NavBar from '../Home_Screen_Components/Navbar'
import AboutScreen_one from './AboutScreen_one'
import AboutScreen_two from './AboutScreen_two'
import Name from './Name'

function TreeScreen() {
  return (
    <div class = "bg-gradient-to-r from-green-300 to-teal-600">
        <NavBar />
        <Name />
        <AboutScreen_one />
        <AboutScreen_two />
        <Footer />
    </div>
  )
}

export default TreeScreen