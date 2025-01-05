import React from 'react'
import Navbar from './ui/shared/Navbar'
import HeroSection from './heroSection'
import CategoryCarousal from './CategoryCarousal'
import LatestJobs from './LatestJobs'
import Footer from './ui/shared/Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CategoryCarousal/>
      <LatestJobs/>
      <Footer/>
    </div>
  )
}

export default Home