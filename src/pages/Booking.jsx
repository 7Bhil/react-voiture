import React from 'react';
import BookingForm from '../components/UI/BookingForm';

const Booking = () => {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2 text-blue-900">Réservez votre véhicule</h1>
          <p className="text-center mb-8 text-gray-600">Remplissez le formulaire ci-dessous pour faire une demande de réservation</p>
          
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;