// PromoCarousel.jsx
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function PromoCarousel() {
  // Données des promotions (tu peux les personnaliser)
  const promotions = [
    {
      title: "Location à partir de 15 000 FCFA/jour",
      description: "Profitez de nos offres spéciales sur les locations de voitures ce mois-ci !",
      image: "https://source.unsplash.com/random/800x400/?car,promotion",
      cta: "Réserver maintenant",
    },
    {
      title: "Vente flash : -20% sur les SUV",
      description: "Découvrez notre sélection de SUV à prix réduit, seulement cette semaine.",
      image: "https://source.unsplash.com/random/800x400/?suv,sale",
      cta: "Voir les offres",
    },
    {
      title: "Livraison gratuite pour les locations de 7 jours",
      description: "Louez une voiture pour une semaine et bénéficiez de la livraison à domicile.",
      image: "https://source.unsplash.com/random/800x400/?car,delivery",
      cta: "En savoir plus",
    },
  ];

  // État pour suivre l'index de la promotion affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à la promotion suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === promotions.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonction pour revenir à la promotion précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? promotions.length - 1 : prevIndex - 1
    );
  };

  // Défilement automatique toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto my-8 overflow-hidden rounded-lg shadow-lg">
      {/* Affichage des promotions */}
      {promotions.map((promo, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={promo.image}
            alt={promo.title}
            className="w-full h-64 sm:h-80 object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/800x400?text=Promotion";
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 text-white">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">{promo.title}</h2>
              <p className="text-lg mb-4">{promo.description}</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
                {promo.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Boutons de navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-2 rounded-full shadow-lg hover:bg-blue-800"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-2 rounded-full shadow-lg hover:bg-blue-800"
      >
        <FaChevronRight />
      </button>

      {/* Indicateurs de position */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {promotions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
