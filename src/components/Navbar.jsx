import React, { useEffect, useState } from 'react'
import { CiLight } from "react-icons/ci";

const Navbar = () => {

  const[sticky , setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
    <div className={`sticky top-0  z-50 flex justify-between min-h-[60px] ${sticky? 'bg-[#212EA0] transition duration-500' : 'bg-transparent transition duration-500'}`}>
        <img  className='h-[40px] w-[190px] self-center mx-22 cursor-pointer' src="Images/logo.png" alt="" />
        <div>
        <ul className='text-white text-medium w-[700px] h-full cursor-pointer flex justify-around items-center mx-5 '>
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Testimonial</li>
            <li><button className='bg-white text-black rounded-2xl px-[25px] py-[6px] cursor-pointer border-0 outline-0'>Contact Us</button></li>
        </ul>   
        </div>

        <div className='text-3xl text-white flex items-center mr-8 cursor-pointer'><CiLight /></div>
    </div>
    </>
  )
}

export default Navbar