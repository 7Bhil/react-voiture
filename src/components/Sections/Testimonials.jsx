import React from 'react';
import TestimonialCard from '../UI/TestimonialCard';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Ce que disent nos clients</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/about#testimonials" 
            className="inline-block border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Voir tous les témoignages
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;