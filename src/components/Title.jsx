import React from 'react'

const Title = ({subTitle , title}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <p className="text-[#212EA0] text-[15px] leading-normal font-[600] "> 
        {subTitle}
        </p>

        <h1 className="text-black text-[32px] leading-normal font-[700]">
        {title}
        </h1>
    </div>
  )
}

export default Title