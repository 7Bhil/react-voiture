import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaArrowLeft, FaCarSide } from 'react-icons/fa';

const Purchase = () => {
  const location = useLocation();
  const car = location.state?.car;

  if (!car) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FaCarSide className="text-6xl text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-blue-900 mb-4">Véhicule non sélectionné</h1>
          <p className="text-gray-600 mb-6">Veuillez sélectionner un véhicule à acheter.</p>
          <Link 
            to="/cars" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Voir les véhicules
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Link 
          to="/cars" 
          className="inline-flex items-center text-blue-900 hover:text-blue-700 mb-6"
        >
          <FaArrowLeft className="mr-2" />
          Retour aux véhicules
        </Link>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Acheter {car.name}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src={car.image} 
                alt={car.name}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-green-700 mb-4">
                {car.purchasePrice}
              </h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-semibold capitalize">{car.type}</span>
                </div>
                {car.details?.year && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Année:</span>
                    <span className="font-semibold">{car.details.year}</span>
                  </div>
                )}
                {car.details?.mileage && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kilométrage:</span>
                    <span className="font-semibold">{car.details.mileage}</span>
                  </div>
                )}
                {car.details?.fuel && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Carburant:</span>
                    <span className="font-semibold">{car.details.fuel}</span>
                  </div>
                )}
                {car.details?.transmission && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Transmission:</span>
                    <span className="font-semibold">{car.details.transmission}</span>
                  </div>
                )}
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-blue-900 mb-2">Contactez-nous</h3>
                <p className="text-blue-700 text-sm">
                  Pour acheter ce véhicule, contactez-nous au +229 98 87 40 19 
                  ou par email à 7bhilal.chitou7@gmail.com
                </p>
              </div>

              <div className="flex gap-4">
                <a 
                  href="tel:+229 98 87 40 19" 
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors text-center"
                >
                  Nous appeler
                </a>
                <a 
                  href="mailto:7bhilal.chitou7@gmail.com" 
                  className="flex-1 bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 px-4 rounded-lg transition-colors text-center"
                >
                  Nous écrire
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;