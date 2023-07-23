import React, { useEffect, useState } from 'react'
// import classData from '../../../../public/CollegeGallery.json'
function CollegeGallery() {

  const [gallery,setGallery] = useState([])
  useEffect(()=>{
    fetch('http://localhost:1000/gallery')
    .then(res =>res.json())
    .then(data => setGallery(data))
  },[])
  return (
    <div >
    <h2 className="text-center font-semibold text-2xl mt-8 mb-4">College Graduates Gallery</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {gallery.map((classItem, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-md">
            <img src={classItem.image} alt={classItem.name} className="bg-gray-200 p-4 rounded-lg shadow-md hover:transform hover:scale-105 transition-transform cursor-pointer" />
            <h3 className="text-lg font-semibold mt-2">{classItem.name}</h3>
          </div>
        ))}
    </div>
    </div>
  )
}

export default CollegeGallery