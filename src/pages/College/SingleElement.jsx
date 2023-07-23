// import React from 'react';

// function SingleCollegeCard({ college }) {
//   const { image, name, admissionDates, events, researchHistory, sports } = college;

//   return (
//     <div>
    
//       <div className="max-w-md   p-6 mx-auto hover:cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
//         <img src={image} alt={name} className="h-48 w-full object-cover" />
//         <div className="p-4">
//           <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
//           <p className="text-gray-600">{admissionDates}</p>
//           <p className="text-gray-600">{events}</p>
//           <p className="text-gray-600">{researchHistory}</p>
//           <p className="text-gray-600">{sports}</p>
//         </div>
        
//         <div className='text-right'>
//         <button className="btn btn-outline btn-success">Details
        
//         </button>
//         </div>
//       </div>
      
//     </div>
//   );
// }

// export default SingleCollegeCard;

import React, { useState } from 'react';

function SingleElement({ college }) {
  const { image, name, admissionDates, events, researchHistory, sports } = college;
  const [showDetails, setShowDetails] = useState(false);

  const handleDetailsClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <div className="max-w-md p-6 mx-auto hover:cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
        <img src={image} alt={name} className="h-48 w-full object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-600">{admissionDates}</p>
          <p className="text-gray-600">{researchHistory}</p>

          {/* Show the "Events" and "Sports Facilities" details if showDetails is true */}
          {showDetails && (
            <>
              <p className="text-gray-600">{events}</p>
              <p className="text-gray-600">{sports}</p>
            </>
          )}
        </div>

        <div className='text-right'>
          {/* Toggle the showDetails state when the "Details" button is clicked */}
          <button className="btn btn-outline btn-success" onClick={handleDetailsClick}>
            {showDetails ? "Hide Details" : "Details"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleElement;

