import React, { useState, useEffect } from 'react';
import SingleCollegeCard from '../Home/CollegeCard/SingleCollegeCard/SingleCollegeCard';
 

function College() {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch('college.json')
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return (
    <>
      <h1 className='text-center font-semibold text-4xl mb-4   '>Colleges</h1>
    <div className='border-b-2 border-[#5BD9B3] rounded-md mb-8 w-40 mx-auto'></div>
    <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 cols-grid-1">

      {colleges.map((college) => (
        <SingleCollegeCard college={college} key={college.id} />
         
      ))}
    </div>
    </>
  );
}

export default College;
