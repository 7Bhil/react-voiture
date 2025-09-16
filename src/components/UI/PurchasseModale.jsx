import React, { useState } from 'react';
import { FaTimes, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';

const PurchaseModal = ({ car, isOpen, onClose, onPurchase }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'cash',
    message: ''
  });

  if (!isOpen || !car) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onPurchase({
      carId: car.id,
      carName: car.name,
      ...formData,
      totalAmount: car.purchasePrice
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-blue-900">Acheter {car.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-blue-900 mb-2">Prix: {car.purchasePrice}</h3>
            <p className="text-sm text-blue-700">Ce prix inclut toutes les taxes et frais d'immatriculation</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nom</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Votre nom"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Prénom</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Votre prénom"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <FaEnvelope />
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Téléphone</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <FaPhone />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Votre numéro"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Adresse</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <FaMapMarkerAlt />
                  </span>
                  <input
                    type="text"
                    name="address"
                    required
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Votre adresse complète"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Méthode de paiement</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <FaMoneyBillWave />
                  </span>
                  <select
                    name="paymentMethod"
                    required
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                  >
                    <option value="cash">Paiement comptant</option>
                    <option value="credit">Crédit bancaire</option>
                    <option value="installments">Paiement échelonné</option>
                  </select>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Message (optionnel)</label>
                <textarea
                  name="message"
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Informations supplémentaires..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Confirmer l'achat
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;