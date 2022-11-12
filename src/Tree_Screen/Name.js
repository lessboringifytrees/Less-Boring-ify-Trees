import React from 'react'

function Name() {
  return (
    <div>
        <section class="text-gray-600 body-font px-5 py-10">
            <div class = "container  mx-auto flex flex-col bg-green-200">
            <div class = "py-4 px-2 flex justify-start">
                <h1 class = "font-extrabold text-3xl text-white p-5 bg-green-500">Name Of The Tree </h1>
            </div>
            <div class="lg:w-1/3 mx-auto flex ">
            <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/420x340" />
            </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Name