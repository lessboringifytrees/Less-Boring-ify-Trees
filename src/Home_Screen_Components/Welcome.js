import React from 'react'
import up from '../Assets/Up.gif'
function Welcome() {
  return (
    <div>
        <section class="text-gray-600 body-font px-5 pb-3">
            <div class = "container  mx-auto flex flex-col justify-center ">
            <div class = "flex justify-start drop-shadow-2xl">
                <h1 style = {{color: 'white', textShadow: '2px 2px 4px black' }} class = "font-extrabold text-5xl text-emerald-50 ">Welcome</h1>
                <img src= "https://i.imgur.com/d3Pbn0P.gif" alt="loading..." class = 'h-14'/>
                <img src = "https://i.imgur.com/PAIVibY.gif" alt="loading..." class = 'h-14'/>

            </div>
            <div class="">
            <div class = "px-2 flex justify-center">
                <h3 class = "font-bold text-3xl text-emerald-700 py-3">Here is what we do!! </h3>
            </div>
            <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4 rounded-3xl border-black border-8 justify-center">
                <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0 " src="https://dummyimage.com/820x340" />
            </div>
            </div>
            <div class = "px-2 flex justify-center">
            <img src={up} alt="loading..." class = 'h-14'/>
                <h3 class = "font-bold text-3xl text-emerald-700">Have a look at me! </h3>
            <img src= "https://i.imgur.com/VYBlZWR.gif" alt="loading..." class = 'h-14'/>

            
            </div>
            </div>
        </section>
    </div>
  )
}

export default Welcome