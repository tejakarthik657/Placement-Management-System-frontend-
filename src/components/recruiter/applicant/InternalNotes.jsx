import React from 'react';

// A helper component to render stars based on a rating
const StarRating = ({ rating, totalStars = 5 }) => {
  const filledStars = '★'.repeat(rating);
  const emptyStars = '☆'.repeat(totalStars - rating);
  return <span className="text-yellow-500 text-lg">{filledStars}{emptyStars}</span>;
};

// SVG Icons for thumbs up/down
const ThumbsUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333V17a1 1 0 001 1h6.364a1 1 0 00.942-.67l1.7-5A1 1 0 0015 11V7a1 1 0 00-1-1h-2.586a1 1 0 01-.942-.67l-1.086-3.26A1 1 0 008.364 2H7a1 1 0 00-1 1v7.333z" />
  </svg>
);

const ThumbsDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667V3a1 1 0 00-1-1H6.636a1 1 0 00-.942.67l-1.7 5A1 1 0 005 9v4a1 1 0 001 1h2.586a1 1 0 01.942.67l1.086 3.26A1 1 0 0011.636 18H13a1 1 0 001-1V9.667z" />
  </svg>
);


// Mock data based on your screenshot
const reviews = [
  {
    id: 1,
    name: 'David Lee',
    date: '2024-07-26',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: 'Sophia is an exceptional candidate with a strong technical background and impressive project experience. Her communication skills are excellent, and she would be a great addition to our team.',
    likes: 2,
    dislikes: 0,
  },
  {
    id: 2,
    name: 'Emily Chen',
    date: '2024-07-23',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 3,
    text: 'Sophia has a solid foundation in computer science and relevant skills. While she meets the requirements, further assessment in the technical interview is recommended.',
    likes: 1,
    dislikes: 1,
  },
];

const ratingDistribution = [
  { stars: 5, percentage: '50%' },
  { stars: 4, percentage: '30%' },
  { stars: 3, percentage: '10%' },
  { stars: 2, percentage: '5%' },
  { stars: 1, percentage: '5%' },
];

const InternalNotes = () => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Internal Notes & Feedback</h3>

      {/* Add New Note Textarea */}
      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="3"
        placeholder="Add a new note or feedback..."
      ></textarea>

      {/* Ratings Summary */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="flex-shrink-0 text-center md:text-left">
          <p className="text-5xl font-bold">4.5</p>
          <StarRating rating={4} /> 
          <p className="text-gray-500 mt-1">2 reviews</p>
        </div>
        <div className="w-full">
          {ratingDistribution.map(item => (
            <div key={item.stars} className="flex items-center gap-2 mb-1">
              <span className="text-sm font-medium text-gray-600">{item.stars}</span>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: item.percentage }}></div>
              </div>
              <span className="text-sm font-medium text-gray-600 w-10 text-right">{item.percentage}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="flex items-start space-x-4">
            <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="mt-2 text-gray-700">{review.text}</p>
              <div className="flex items-center space-x-4 mt-2 text-gray-500">
                <button className="flex items-center space-x-1 hover:text-blue-600">
                  <ThumbsUpIcon />
                  <span>{review.likes}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-red-600">
                  <ThumbsDownIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternalNotes;