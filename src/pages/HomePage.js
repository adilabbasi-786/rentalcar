import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import Service from '../components/Services/Service'
import About from '../components/About/About'
import FactCounter from '../components/FactCounter/FactCounter'
import OurServices from '../components/OurServices/OurServices'
import Booking from '../components/Booking/Booking'

const HomePage = () => {
  return (
    <>
     <Carousel/>
     <Service/> 
     <About/>
     <FactCounter/>
     <OurServices/>
     <Booking/>
    </>
  )
}

export default HomePage
