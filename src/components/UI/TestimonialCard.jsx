import React from 'react';
import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow">
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full mr-4 object-cover" 
        />
        <div>
          <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
          <div className="flex text-orange-400">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={i < testimonial.rating ? 'text-orange-500' : 'text-gray-300'} 
                size={14} 
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic">"{testimonial.comment}"</p>
    </div>
  );
};

export default TestimonialCard;