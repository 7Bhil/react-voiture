import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaCarSide, FaCheckCircle } from 'react-icons/fa';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    startDate: '',
    endDate: '',
    withDriver: false,
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous ajouteriez la logique pour traiter la réservation
    console.log('Données de réservation:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-blue-900 mb-2">Demande envoyée!</h2>
        <p className="text-gray-600">Nous vous contacterons rapidement pour confirmer votre réservation.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Nom</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaUser />
            </span>
            <input 
              type="text" 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
              placeholder="Votre nom" 
              required 
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Prénom</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaUser />
            </span>
            <input 
              type="text" 
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
              placeholder="Votre prénom" 
              required 
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaEnvelope />
            </span>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
              placeholder="votre@email.com" 
              required 
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Téléphone</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaPhone />
            </span>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
              placeholder="Votre numéro" 
              required 
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Date de début</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaCalendarAlt />
            </span>
            <input 
              type="date" 
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
              required 
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Date de fin</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaCalendarAlt />
            </span>
            <input 
              type="date" 
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
              required 
            />
          </div>
        </div>
      </div>
      
      <div className="flex items-center">
        <input 
          type="checkbox" 
          id="withDriver" 
          name="withDriver"
          checked={formData.withDriver}
          onChange={handleChange}
          className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded" 
        />
        <label htmlFor="withDriver" className="ml-2 block text-sm text-gray-700">
          Avec chauffeur (+10 000 FCFA/jour)
        </label>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2 text-gray-700">Message (optionnel)</label>
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4" 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
          placeholder="Informations supplémentaires..."
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
      >
        <FaCarSide className="mr-2" /> Envoyer la demande
      </button>
    </form>
  );
};

export default BookingForm;