import React, { useState,useEffect } from 'react'
import SingleAdmmsion from './SingleAdmmsion';

function Admission() {
  const [admission, setAddmission] = useState([]);


  useEffect(() => {
    fetch('http://localhost:1000/admission')
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

// // // Admission.js

// // import React, { useState, useEffect } from 'react';
// // import SingleAdmission from '../Admissions/SingleAdmmsion';

// // function Admission() {
// //   const [admission, setAdmission] = useState([]);

// //   useEffect(() => {
// //     fetch('http://localhost:1000/admission')
// //       .then((res) => res.json())
// //       .then((data) => setAdmission(data));
// //   }, []);

// //   return (
// //     <div className="max-w-7xl mx-auto">
// //       <h1 className="text-center text-4xl font-bold">Admission</h1>
// //       <div className="border-b-2 border-[#5BD9B3] rounded-md mb-8 w-40 mx-auto"></div>
// //       <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 cols-grid-1">
// //         {admission.map((collegeName) => (
// //           <SingleAdmission collegeName={collegeName} key={collegeName.id} />
          
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Admission;

// // Admission.js

// import React, { useState, useEffect } from 'react';
// import SingleAdmission from '../Admissions/SingleAdmmsion';

// function Admission() {
//   const [admission, setAdmission] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:1000/admission')
//       .then((res) => res.json())
//       .then((data) => setAdmission(data));
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto">
//       <h1 className="text-center text-4xl font-bold">Admission</h1>
//       <div className="border-b-2 border-[#5BD9B3] rounded-md mb-8 w-40 mx-auto"></div>
//       <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 cols-grid-1">
//         {admission.map((uname) => (
//           <SingleAdmission key={uname.id} uname={uname} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Admission;

// Admission.js

// import React, { useState, useEffect } from 'react';
 
// import AdmissionField from './AdmissionField';
// import SingleAdmmsion from './SingleAdmmsion';
 

// function Admission() {
//   const [admission, setAdmission] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:1000/admission')
//       .then((res) => res.json())
//       .then((data) => setAdmission(data));
//   }, []);

//   const [selectedCollege, setSelectedCollege] = useState(null);

//   return (
//     <div className="max-w-7xl mx-auto">
//       <h1 className="text-center text-4xl font-bold">Admission</h1>
//       <div className="border-b-2 border-[#5BD9B3] rounded-md mb-8 w-40 mx-auto"></div>
//       <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 cols-grid-1">
//         {admission.map((uname) => (
           
//            <SingleAdmmsion key={uname.id}
//             uname={uname}
//             onClick={() => setSelectedCollege(uname)} />
//         ))}
//       </div>
//       {selectedCollege && (
//         <AdmissionField collegeName={selectedCollege} />
        
//       )}
//     </div>
//   );
// }

// export default Admission;


// Admission.js

// import React, { useState, useEffect } from 'react';
//  import AdmissionField from './AdmissionField';
// import SingleAdmmsion from './SingleAdmmsion';
 

// function Admission() {
//   const [admission, setAdmission] = useState([]);
//   const [selectedCollege, setSelectedCollege] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:1000/admission')
//       .then((res) => res.json())
//       .then((data) => setAdmission(data));
//   }, []);

//   const handleCollegeClick = (college) => {
//     setSelectedCollege(college);
//   };

//   return (
//     <div className="max-w-7xl mx-auto">
//       <h1 className="text-center text-4xl font-bold">Admission</h1>
//       <div className="border-b-2 border-[#5BD9B3] rounded-md mb-8 w-40 mx-auto"></div>
//       <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 cols-grid-1">
//         {admission.map((uname) => (
//           <SingleAdmission
//             key={uname.id}
//             uname={uname}
//             onClick={() => handleCollegeClick(uname)}
//           />
//         ))}
//       </div>
//       {selectedCollege && (
//         <AdmissionField collegeName={selectedCollege} />
//       )}
//     </div>
//   );
// }

// export default Admission;
