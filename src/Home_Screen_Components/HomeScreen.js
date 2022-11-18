import React from 'react'
import AboutUs from '../Home_Screen_Components/AboutUs';
import JoinUs from '../Home_Screen_Components/joinUs';
import Navbar from '../Home_Screen_Components/Navbar';
// import Problems from '../Home_Screen_Components/Problems';
import Welcome from '../Home_Screen_Components/Welcome';
import Footer from './Footer';

function HomeScreen() {
  return (
    <div className="App" >
      <div class = "bg-gradient-to-r from-green-300 to-teal-600 ">
        <div class = "rounded-b-3xl border-b-8 border-b-white">
        <Navbar />
        <Welcome />
        </div>
        <AboutUs />
        {/* <Problems /> */}
        <div class = "rounded-t-3xl border-t-8 border-t-white" >
        <JoinUs />
        <Footer />
        </div>
        </div>
   
   </div>


  )
}

export default HomeScreen