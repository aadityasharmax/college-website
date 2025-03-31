import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
    <div className="flex gap-5 justify-center items-center flex-col h-screen text-white">
          <h1 className='text-6xl text-center font-[600] leading-normal'> 
          We Ensure better education<br/> for a better world
          </h1>

          <p className='text-center'>
          Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and<br/> experiences needed to excel in the dynamic field of education
          </p>
          <button className='flex items-center gap-2 bg-white text-black rounded-4xl px-5 py-2 cursor-pointer outline-0'>Explore More <FaArrowRightLong /></button>
    </div>
    </>
  )
}

export default Hero