import React, { useState, useEffect } from 'react';

const ResearchPapers = () => {
  const [researchPapers, setResearchPapers] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the file
    fetch('http://localhost:1000/research')
      .then((response) => response.json())
      .then((data) => setResearchPapers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-center font-semibold text-2xl mt-8 mb-4">Research Papers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {researchPapers.map((paper, index) => (
          <div key={index} className="bg-white cursor-pointer hover:bg-gray-200 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">{paper.title}</h3>
            <p className="text-sm font-light">{paper.authors.join(', ')}</p>
            <p className="mt-2">{paper.abstract}</p>
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline block mt-4"
            >
              Read more
            </a>
            <p className="mt-2 text-sm font-light">University: {paper.university}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPapers;
