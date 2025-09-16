import React from 'react';
import ContactForm from '../components/UI/ContactForm';
import ContactInfo from '../components/Sections/ContactInfo';

const Contact = () => {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-center mb-2 text-blue-900">Contactez-nous</h1>
          <p className="text-center mb-8 text-gray-600">
            Une question, une demande particulière? Notre équipe vous répond sous 24h.
          </p>
          
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <ContactForm />
          </div>
        </div>
        
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;