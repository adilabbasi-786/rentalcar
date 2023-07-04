import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import Service from '../components/Services/Service'
import About from '../components/About/About'
import FactCounter from '../components/FactCounter/FactCounter'
import OurServices from '../components/OurServices/OurServices'
import Booking from '../components/Booking/Booking'
import Teams from '../components/Teams/Teams'
import Clients from '../components/Clients/Clients'

const HomePage = () => {
  return (
    <>
     <Carousel/>
     <Service/> 
     <About/>
     <FactCounter/>
     <OurServices/>
     <Booking/>
     <Teams/>
     <Clients/>
    </>
  )
}

export default HomePage
