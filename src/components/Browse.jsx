import React from 'react'
import Navbar from './ui/shared/Navbar'
import Footer from './ui/shared/Footer'
import Job from './Job'
const randomJobs = [1,2,3]
const Browse = () => {
  return (
    <div>
      <Navbar/>
        <div className='max-w-7xl mx-auto my-10'>
            <h1 className='font-bold text-xl my-10'>Search Results ({randomJobs.length})</h1>
            <div className='grid grid-cols-3 gap-4 '>
            {
                randomJobs.map((job,index)=>{
                    return(
                        <Job/>
                    )
                })
            }
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Browse
