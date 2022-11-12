import React from 'react'
import eye from '../Assets/Eyeeee.gif'
import hi from '../Assets/Hiiii.gif'
import up from '../Assets/Up.gif'
function Welcome() {
  return (
    <div>
        <section class="text-gray-600 body-font px-5 py-10">
            <div class = "container  mx-auto flex flex-col justify-center ">
            <div class = "py-4  flex justify-center drop-shadow-2xl">
                <h1 class = "font-extrabold text-5xl text-emerald-50 ">Welcome</h1>
                <img src={eye} alt="loading..." class = 'h-14'/>
                <img src={hi} alt="loading..." class = 'h-14'/>

            </div>
            <div class="">
            <div class = "px-2 flex justify-center">
                <h3 class = "font-bold text-3xl text-emerald-700 py-3">Here is what we do!! </h3>
            </div>
            <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4 rounded-3xl justify-center">
                <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0 " src="https://dummyimage.com/820x340" />
            </div>
            </div>
            <div class = "px-2 flex justify-center">
            <img src={up} alt="loading..." class = 'h-14'/>
                <h3 class = "font-bold text-3xl text-emerald-700">Have a look at me! </h3>
            <img src={up} alt="loading..." class = 'h-14'/>

            
            </div>
            </div>
        </section>
    </div>
  )
}

export default Welcome