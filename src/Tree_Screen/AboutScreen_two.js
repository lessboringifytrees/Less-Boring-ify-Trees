import React from 'react'

function AboutScreen_two() {
  return (
    <div>
        <section class="text-gray-600 body-font px-5 ">
          <div class = "container  mx-auto flex flex-col  rounded-xl">
            <div class = "px-2 flex flex-col justify-start">
              <div class = "my-5 py-2 bg-green-600 rounded-2xl">
                  <h1 class = "font-extrabold text-3xl text-white">Up to 100 feet (30m)</h1>
                  <h1 class = "font-extrabold text-2xl text-black pb-2">Height</h1>
              </div>
            </div>
                <hr style = {{color: 'black'}} />
            <div>
              <div class = "my-5 py-2 bg-green-600 rounded-2xl">
                <h1 class = "font-extrabold text-3xl text-white">Thick, Green to Olive in Hue</h1>
                <h1 class = "font-extrabold text-2xl text-black pb-2">Leaf Characterstics</h1>
              </div>
                <hr />
                <div class = "my-5 py-2 bg-green-600 rounded-2xl">
                <h1 class = "font-extrabold text-3xl text-white">India, Pakistan</h1>
                <h1 class = "font-extrabold text-2xl text-black pb-2">Native Habitat</h1>
              </div>
                <hr />
                <div class = "my-5 py-2 bg-green-600 rounded-2xl">
                <h1 class = "font-extrabold text-3xl text-white">Some More Facts</h1>
                <h1 class = "font-extrabold text-2xl text-black pb-2">Facts</h1>
              </div>
                <hr />
            <div>
              <div class = "my-5 py-2 bg-green-600 rounded-2xl">
                <h1 class = "font-extrabold text-3xl text-white">Youtube Video</h1>
                <h1 class = "font-extrabold text-2xl text-black">Video Link</h1>
              </div>
            </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default AboutScreen_two