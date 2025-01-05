import React from 'react'
import Navbar from './ui/shared/Navbar'
import HeroSection from './heroSection'
import CategoryCarousal from './CategoryCarousal'
import LatestJobs from './LatestJobs'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CategoryCarousal/>
      <LatestJobs/>
    </div>
  )
}

export default Home