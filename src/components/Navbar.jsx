import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='bg-gray-600 flex justify-around min-h-[60px]'>
        <img  className='h-[40px] w-[190px] self-center mx-22 cursor-pointer' src="Images/logo.png" alt="" />
        <div>
        <ul className='text-white text-medium w-[700px] h-full cursor-pointer flex justify-between items-center mx-5 '>
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Testimonial</li>
            <li><button className='bg-white text-black rounded-2xl px-[25px] py-[6px] cursor-pointer border-0 outline-0'>Contact Us</button></li>
        </ul>   
        </div>
    </div>
    </>
  )
}

export default Navbar