import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Gallery = () => {
  return (
    <div className='flex flex-col items-center' id='campus'>
        <div className="flex w-full max-w-[1200px] h-[300px] gap-9 justify-center my-[80px] cursor-pointer">
            <img className="rounded-2xl h-full" src="/Images/gallery-1.png" alt="" />
            <img className="rounded-2xl h-full" src="/Images/gallery-2.png" alt="" />
            <img className="rounded-2xl h-full" src="/Images/gallery-3.png" alt="" />
            <img className="rounded-2xl h-full" src="/Images/gallery-4.png" alt="" />
        </div>

         <div className='mb-20'>
         <button className='flex items-center self-center gap-2 bg-[#212EA0] text-white rounded-4xl px-5 py-2 cursor-pointer outline-0'>See More Here <FaArrowRightLong /></button>
         </div>
    </div>
  )
}

export default Gallery