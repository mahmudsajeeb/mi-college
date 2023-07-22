// CollegeSearch.js
import React, { useState } from "react";
import axios from "axios";
import CollegeCard from "./CollegeCard";

const CollegeSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    axios
      .get(`/api/colleges?search=${searchTerm}`)
      .then((response) => setSearchResults(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="college-list">
        {searchResults.map((college) => (
          <CollegeCard key={college._id} college={college} />
        ))}
      </div>
    </div>
  );
};

export default CollegeSearch;
