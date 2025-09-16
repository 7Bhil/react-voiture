import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CarCard from '../UI/CarCard';
import { cars, carTypes } from '../../data/cars';

const CarGrid = ({ title = "Notre flotte", limit, showFilters = false }) => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Filtrer les véhicules selon l'onglet actif
  let filteredCars = activeTab === 'all' 
    ? cars 
    : cars.filter(car => car && car.type === activeTab);
  
  // Limiter le nombre de véhicules affichés si nécessaire
  if (limit) {
    filteredCars = filteredCars.slice(0, limit);
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">{title}</h2>
        
        {showFilters && (
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              {carTypes.map((type, index) => (
                <button
                  key={type.value}
                  onClick={() => setActiveTab(type.value)}
                  className={`px-6 py-3 text-sm font-medium ${
                    index === 0 ? 'rounded-l-lg' : 
                    index === carTypes.length - 1 ? 'rounded-r-lg' : ''
                  } ${
                    activeTab === type.value 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-white text-blue-900 hover:bg-gray-50'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {filteredCars.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Aucun véhicule trouvé dans cette catégorie.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map(car => (
                car && (
                  <CarCard key={car.id} car={car} />
                )
              ))}
            </div>

            {limit && cars.length > limit && (
              <div className="text-center mt-12">
                <Link 
                  to="/cars" 
                  className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                >
                  Voir tous les véhicules
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default CarGrid;