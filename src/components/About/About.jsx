import React from 'react'

const About = () => {
  return (
    <div className='flex ml-auto mr-auto mt-[100px] mb-[100px] items-center justify-between w-[80%] '>

        <div className='basis-[40%] relative flex justify-center mb-[30px]'>
            <img className="w-[80%] rounded-3xl " src="/Images/about.png" alt="" />
            <img className="absolute top-[50%] w-[60px] cursor-pointer left-[50%] translate-x-[-50%] translate-y-[-50%]" src="/Images/play-icon.png" alt="" />
        </div>

        <div className='basis-[56%] '>
            <h2 className='text-[#212EA0] text-[19px] font-[600]'>ABOUT UNIVERSITY</h2>
            <h2 className=' text-[35px] font-[700] max-w-[400px] my-[10px]'>Nurturing Tomorrow's Leaders Today</h2>
            <p className="leading-normal text-[#676767] mb-[20px]">Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>


            <p className="leading-normal text-[#676767] mb-[20px]">With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
            <p className="leading-normal text-[#676767] mb-[20px]">Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>
    </div>
  )
}

export default About