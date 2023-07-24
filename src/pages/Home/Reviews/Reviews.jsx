import React, { useState, useEffect } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Reviews = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    // Fetch review data from the JSON file (replace 'reviews.json' with your actual file name)
    fetch('http://localhost:1000/reviews')
      .then(response => response.json())
      .then(data => setReviewData(data))
      .catch(error => console.error('Error fetching review data:', error));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Users Feedback</h2>
      <div className="space-y-4 grid lg:grid-cols-3 gap-4">
        {reviewData.map((review) => (
          <div key={review.id} className="bg-gray-100 p-4 rounded-lg">
            <p className="font-bold mb-1">
              {review.username} - Rated {review.rating} stars on {review.date}
            </p>
            {/* Render the Rating component for each review */}
            <Rating style={{ maxWidth: 250 }} value={review.rating} readOnly />
            <p>{review.review_text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
