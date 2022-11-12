import React from 'react'
import AboutUs from '../Home_Screen_Components/AboutUs';
import JoinUs from '../Home_Screen_Components/joinUs';
import Navbar from '../Home_Screen_Components/Navbar';
import Problems from '../Home_Screen_Components/Problems';
import Welcome from '../Home_Screen_Components/Welcome';
import Footer from './Footer';

function HomeScreen() {
  return (
    <div className="App" >
      <div class = "bg-gradient-to-r from-emerald-400 to-teal-500">
        <div class = "bg-gradient-to-r from-green-300 to-teal-600 rounded-b-3xl border-b-8 border-b-white">
        <Navbar />
        <Welcome />
        </div>
        <AboutUs />
        {/* <Problems /> */}
        <JoinUs />
        <Footer />
        </div>
   
   </div>


  )
}

export default HomeScreen