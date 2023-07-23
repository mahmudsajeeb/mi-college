import React, { useState,useEffect } from 'react'
import SingleAdmmsion from './SingleAdmmsion';

function Admission() {
  const [admission, setAddmission] = useState([]);


  useEffect(() => {
    fetch('admission.json')
      .then((res) => res.json())
      .then((data) => setAddmission(data));
  }, []);

  return (
    <div className='max-w-7xl mx-auto'>
    <h1 className='text-center text-4xl font-bold'>Admission</h1>
    <div className='border-b-2 border-[#5BD9B3] rounded-md mb-8 w-40 mx-auto'></div>
    <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 cols-grid-1">

      {admission.map((uname) => (
         
          <SingleAdmmsion uname={uname} key={uname.id} />
      ))}
    </div>
    </div>
  )
}

export default Admission