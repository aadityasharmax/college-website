import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className=' flex justify-center items-center'>
            <div className='bg-black h-[1px] w-[80%]'></div>
        </div>

        <div className='flex justify-between mx-40 p-10'>
            <p>&copy; 2025 Edusity. All rights Reserved</p>
            <ul className='flex justify-between items-center w-3xs cursor-pointer '>
                <li>Terms Of Service</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer