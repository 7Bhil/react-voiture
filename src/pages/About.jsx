import React from 'react';
import Testimonials from '../components/Sections/Testimonials';
import FAQSection from '../components/Sections/FAQSection';

const About = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-center mb-6 text-blue-900">À propos de Bhilcars</h1>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 text-center mb-8">
              Bhilcars est une agence de location et de vente de véhicules de prestige établie au Togo depuis 2015.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">Notre mission</h2>
              <p className="text-gray-700">
                Offrir à nos clients une expérience de location premium avec des véhicules de qualité, 
                un service personnalisé et des tarifs transparents.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-900">50+</span>
                </div>
                <h3 className="font-semibold text-blue-900">Véhicules</h3>
                <p className="text-gray-600">Dans notre flotte</p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-900">5+</span>
                </div>
                <h3 className="font-semibold text-blue-900">Ans d'expérience</h3>
                <p className="text-gray-600">Au service de nos clients</p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-900">1000+</span>
                </div>
                <h3 className="font-semibold text-blue-900">Clients satisfaits</h3>
                <p className="text-gray-600">Nous font confiance</p>
              </div>
            </div>
          </div>
        </div>
        
        <Testimonials />
        <FAQSection />
      </div>
    </div>
  );
};

export default About;