import React from 'react'
import './Search.css'
function Search() {
  return (
    <div >

   
    <div className='flex justify-center bg-search-image items-center h-[700px] bg-center bg-cover bg-opacity-70'>
      <div className="form-control">
  <div className="input-group">
    <input type="text" placeholder="Search…" className="input lg:w-[800px] w-96 md:w-[700px] input-bordered" />
    <button className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
    </div>
    </div>
  )
}

export default Search