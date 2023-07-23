// // import React from 'react'
// // import './Search.css'
// // function Search() {
// //   return (
// //     <div >

   
// //     <div className='flex justify-center bg-search-image items-center h-[700px] bg-center bg-cover bg-opacity-60'>
// //       <div className="form-control">
// //   <div className="input-group">
// //     <input type="text" placeholder="Search…" className="input lg:w-[800px] w-96 md:w-[700px] input-bordered" />
// //     <button className="btn btn-square">
// //       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
// //     </button>
// //   </div>
// // </div>
// //     </div>
// //     </div>
// //   )
// // }

// // export default Search



// import React, { useState } from 'react';
// import './Search.css';
// import SingleElement from '../../College/SingleElement';
 

// function Search() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [collegeData, setCollegeData] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const response = await fetch(`http://localhost:1000/college?search=${searchQuery}`);
//       const data = await response.json();
//       setCollegeData(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       <div className='flex justify-center bg-search-image items-center h-[700px] bg-center bg-cover bg-opacity-60'>
//         <div className="form-control">
//           <div className="input-group">
//             <input
//               type="text"
//               placeholder="Search…"
//               className="input lg:w-[800px] w-96 md:w-[700px] input-bordered"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button className="btn btn-square" onClick={handleSearch}>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Render college cards based on the search results */}
//       {collegeData.map((college) => (
//         <SingleElement key={college._id} college={college} />
        
//       ))}
//     </div>
//   );
// }

// export default Search;



// // import React, { useState } from 'react';
// // import './Search.css';

// // function Search() {
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [collegeData, setCollegeData] = useState([]);

// //   const handleSearch = async () => {
// //     try {
// //       const response = await fetch(`http://localhost:1000/college?search=${searchQuery}`);
// //       const data = await response.json();
// //       setCollegeData(data);
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <div className='flex justify-center bg-search-image items-center h-[700px] bg-center bg-cover bg-opacity-60'>
// //         <div className="form-control">
// //           <div className="input-group">
// //             <input
// //               type="text"
// //               placeholder="Search…"
// //               className="input lg:w-[800px] w-96 md:w-[700px] input-bordered"
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //             />
// //             <button className="btn btn-square" onClick={handleSearch}>
// //               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// //               </svg>
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Render college cards based on the search results */}
// //       {collegeData.map((college) => (
// //         <div key={college._id}>
// //           {/* Render college card using college data */}
// //           {/* For example: */}
// //           <h2>{college.name}</h2>
// //           <p>{college.description}</p>
// //           {/* Add more college data fields as needed */}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default Search;


// import React, { useState } from 'react';
// import './Search.css';
// import SingleElement from '../../College/SingleElement';

// function Search() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [collegeData, setCollegeData] = useState(null); // Change the initial state to null

//   const handleSearch = async () => {
//     try {
//       const response = await fetch(`http://localhost:1000/college?search=${searchQuery}`);
//       const data = await response.json();
//       setCollegeData(data[0] || null); // Set the first matching college or null if no match
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       <div className='flex justify-center bg-search-image items-center h-[700px] bg-center bg-cover bg-opacity-60'>
//         <div className="form-control">
//           <div className="input-group">
//             <input
//               type="text"
//               placeholder="Search…"
//               className="input lg:w-[800px] w-96 md:w-[700px] input-bordered"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button className="btn btn-square" onClick={handleSearch}>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Render the college card if there is a match in the search results */}
//       {collegeData && <SingleElement college={collegeData} />}
//     </div>
//   );
// }

// export default Search;

// Search.js

import React, { useState } from 'react';
import './Search.css';
import SingleElement from '../../College/SingleElement';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [collegeData, setCollegeData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:1000/college/search?name=${searchQuery}`);
      const data = await response.json();
      setCollegeData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <div className='flex justify-center bg-search-image items-center h-[700px] bg-center bg-cover bg-opacity-60'>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input lg:w-[800px] w-96 md:w-[700px] input-bordered"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-square" onClick={handleSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Render the college card if there is a match in the search results */}
      {collegeData && <SingleElement college={collegeData} />}
    </div>
  );
}

export default Search;

