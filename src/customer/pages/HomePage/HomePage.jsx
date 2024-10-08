import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSecCaraousel from '../../components/HomeSecCaraousel/HomeSecCaraousel'
import Demo from '../../components/HomeSecCaraousel/Demo'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
    <div>
        <MainCarousel />
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            
            <HomeSecCaraousel />
            <HomeSecCaraousel />
            <HomeSecCaraousel />
            <HomeSecCaraousel />
            
        </div>
        <Footer />
    </div>
  )
}

export default HomePage