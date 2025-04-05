import React, { useEffect, useState } from 'react'
import { CiLight } from "react-icons/ci";
import { Link } from 'react-scroll';

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
        <Link className='h-[40px] w-[190px] self-center mx-22 cursor-pointer' to='hero' smooth={true} offset={-80} duration={500}><img   src="Images/logo.png" alt="" /></Link>
        <div>
        <ul className='text-white text-medium w-[700px] h-full cursor-pointer flex justify-around items-center mx-5 '>
            <li><Link to='hero' smooth={true} offset={-80} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-160} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-140} duration={500}>Campus</Link></li>
            <li><Link to='testimonial' smooth={true} offset={-260} duration={500}>Testimonial</Link></li>
            <li><Link to='contact' smooth={true} offset={-210} duration={500} className='bg-white text-black rounded-2xl px-[25px] py-[6px] cursor-pointer border-0 outline-0'>Contact Us</Link></li>
        </ul>   
        </div>

        <div className='text-3xl text-white flex items-center mr-8 cursor-pointer'><CiLight /></div>
    </div>
    </>
  )
}

export default Navbar