"use client"
import React from 'react'
import Image from 'next/image'

import { TypeAnimation } from '/Users/chaitanya/node_modules';




const NameIntro = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left" >
          <h1 className="text-[#494949] mb-4 text-3xl sm:text-4xl lg-text-5xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-900">
            Hi,I am {" "}
            </span>
            <br></br>
            <TypeAnimation
            sequence={[
            // Same substring at the start will only be typed out once, initially
            'Chaitanya',
            2700, // wait 2s before replacing the first line above with the second line below
            'a Comp Eng student',
            1400,
            
            ]}
            wrapper="span"
            speed={37}
            repeat={Infinity}
            />

          </h1>
          <p className='text-[#3c4144] text-base sm:text-lg mb-6 lg:text-xl'>
            I am a Computer Engineering student from NUS and
            an aspiring software engineer
          </p> 
          <div>
            {/* <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"> 
            Hire Me  
        </button> */}
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-transparent bg-gradient-to-br from-blue-500 via purple-500 to-pink-500 hover:bg-slate-800 text-white border mt-3"> 
            <span className="block bg-[#2e2e2e] hover:bg-slate-800 rounded-full px-5 py-2">View Resume </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#f8eded] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"> 
                <Image
                src="/images/photo_of_me.png"
                alt="intro image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                height={300}
                /> 
            </div>
        </div>
      </div>
    </section>
  )
}

export default NameIntro

