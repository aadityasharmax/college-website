import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs/Programs.jsx'
import Title from './components/Title.jsx'
import About from './components/About/About.jsx'
import Gallery from './components/Gallery.jsx'

function App() {
  

  return (
    <>
    <div className=" relative bg-[url('Images/hero.png')] bg-cover h-screen bg-center">
    <div  className="absolute inset-0 bg-gradient-to-b from-[rgba(8,0,58,0.7)] to-[rgba(8,0,58,0.7)]"></div>
    <div className='relative z-10'>
    <Navbar/>
    <Hero/>
    <Title subTitle='OUR PROGRAMS' title='What we offer'/>
    <Programs/>
    <About/>
    <Title subTitle='GALLERY' title='Campus Photos'/>
    <Gallery/>
    <Title subTitle='TESTIMONIALS' title='What Student Says'/>
    </div>
    
    </div>
      
    </>
  )
}

export default App
