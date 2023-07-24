import React from 'react'
import Search from './Search/Search'
import CollegeCard from './CollegeCard/CollegeCard'
import CollegeGallery from './CollegeGallery/CollegeGallery'
import ResearchPapers from './ResearchPapersSection/ResearchPapersSection'
import Reviews from './Reviews/Reviews'
 

function Home() {
  return (
    <div>
      <Search />
      <div className='max-w-7xl mx-auto m-20'>
      <CollegeCard />
      <CollegeGallery />
       <ResearchPapers />
       {/* <CollegeReviewSection /> */}
       <Reviews />
      </div>
    </div>
  )
}

export default Home