import React from 'react';
import { FaCarSide } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-blue-900 text-white py-16 md:py-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        {/* Contenu texte */}
        <div className="max-w-2xl relative z-10 md:mr-8 mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Location de véhicules de prestige</h2>
          <p className="text-xl mb-8">Découvrez notre flotte de véhicules haut de gamme à des tarifs compétitifs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/booking"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
            >
              <FaCarSide className="mr-2" /> Réserver maintenant
            </Link>
            <Link
              to="/cars"
              className="bg-transparent hover:bg-blue-800 border-2 border-white text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Voir tous les véhicules
            </Link>
          </div>
        </div>

        {/* Image */}
        <div
          className="w-full md:w-1/2 h-64 md:h-96 bg-cover bg-center rounded-lg z-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'
          }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-90 z-0"></div>
    </section>
  );
};

export default HeroSection;
