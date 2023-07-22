import React from 'react'
import Search from './Search/Search'
import CollegeCard from './CollegeCard/CollegeCard'
import CollegeGallery from './CollegeGallery/CollegeGallery'

function Home() {
  return (
    <div>
      <Search />
      <div className='max-w-7xl mx-auto m-20'>
      <CollegeCard />
      <CollegeGallery />
      </div>
    </div>
  )
}

export default Home