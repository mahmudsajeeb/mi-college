import React, { useEffect, useState } from 'react';
import CollegeReviewSection from './CollegeReviewSection';

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    fetchReviewsData();
  }, []);

  const fetchReviewsData = async () => {
    try {
      const response = await fetch('../../../../public/reviews.json');
      const data = await response.json();
      setReviewsData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1 className='text-center text-4xl'>Users Review</h1>
      
     <CollegeReviewSection colleges={reviewsData} />
      
    </div>
  );
};

export default Reviews;
