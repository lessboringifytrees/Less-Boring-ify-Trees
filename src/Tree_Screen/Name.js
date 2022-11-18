import React from 'react'
import SlideShow from './SlideShow'

function Name() {
  return (
    <div>
        <section class="text-gray-600 body-font px-5 ">
            <div class = "container  mx-auto flex flex-col">
            <div class = "py-4 px-2 flex justify-start">
                <h1 style = {{color: 'white', textShadow: '2px 2px 4px black' }} class = "font-extrabold text-4xl text-white p-5 bg-green-500 rounded-3xl">Banyan Tree </h1>
            </div>
            <div class="">
            <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4 rounded-3xl border-black border-8">
                <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0 " src="https://dummyimage.com/420x340" />
            </div>
            </div>
            <h1 class = "font-extrabold text-2xl text-black">Botanical Name: <i>Ficus benghalensis</i> </h1>
            {/* <SlideShow /> */}
            </div>
        </section>
    </div>
  )
}

export default Name