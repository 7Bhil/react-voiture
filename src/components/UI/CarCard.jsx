import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUsers, 
  FaSuitcase, 
  FaCog, 
  FaGasPump, 
  FaSnowflake,
  FaCarSide
} from 'react-icons/fa';

// Image de placeholder en base64
const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWRlZWVlIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIiBmaWxsPSIjOTk5Ij5Ww6loaWN1bGU8L3RleHQ+PC9zdmc+';

const CarCard = ({ car }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Vérification que car existe
  if (!car) {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <div className="text-gray-400">
            <FaCarSide size={48} />
          </div>
        </div>
        <div className="p-6">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-4"></div>
            <div className="h-10 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
      <div className="h-48 overflow-hidden relative bg-gray-100">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse bg-gray-300 w-full h-full"></div>
          </div>
        )}
        
        <img 
          src={imageError ? placeholderImage : (car.image || placeholderImage)} 
          alt={car.name || 'Véhicule'} 
          className={`w-full h-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          onError={handleImageError}
        />
        
        {car.featured && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
            Populaire
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-900 mb-2">{car.name || 'Modèle non spécifié'}</h3>
        
        {/* Prix */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-orange-500 font-bold text-lg">{car.price || 'Prix sur demande'}</span>
            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full capitalize">
              {car.type || 'non spécifié'}
            </span>
          </div>
          {car.availableForPurchase && car.purchasePrice && (
            <div className="bg-green-50 p-2 rounded mt-2">
              <p className="text-green-800 text-sm font-semibold">
                À vendre: {car.purchasePrice}
              </p>
            </div>
          )}
        </div>

        {/* Détails du véhicule */}
        {car.details && (
          <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-gray-600">
            <div className="flex items-center">
              <FaUsers className="mr-2 text-blue-600" />
              <span>{car.details.passengers || '-'} passagers</span>
            </div>
            <div className="flex items-center">
              <FaSuitcase className="mr-2 text-blue-600" />
              <span>{car.details.bags || '-'} bagages</span>
            </div>
            <div className="flex items-center">
              <FaCog className="mr-2 text-blue-600" />
              <span>{car.details.transmission || '-'}</span>
            </div>
            <div className="flex items-center">
              <FaGasPump className="mr-2 text-blue-600" />
              <span>{car.details.fuel || '-'}</span>
            </div>
            {car.details.ac && (
              <div className="flex items-center col-span-2">
                <FaSnowflake className="mr-2 text-blue-600" />
                <span>Climatisation</span>
              </div>
            )}
          </div>
        )}
        
        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-2">
          <Link 
            to="/booking" 
            state={{ car }}
            className="flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Louer
          </Link>
          
          {car.availableForPurchase && (
            <Link 
              to="/purchase" 
              state={{ car }}
              className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Acheter
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarCard;