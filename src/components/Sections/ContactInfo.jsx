import React from 'react';
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nous contacter</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Adresse</h3>
            <p className="text-blue-100">123 Avenue de la Liberté<br />Lomé, Togo</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Horaires</h3>
            <p className="text-blue-100">Lun-Ven: 8h-18h<br />Sam: 9h-16h</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhone size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
            <p className="text-blue-100">+229 98 87 40 19<br />+228 98 76 54 32</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-blue-100">info@bhilcars.tg<br />contact@bhilcars.tg</p>
          </div>
        </div>
        
        <div className="mt-12 bg-blue-800 rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold">Besoin d'aide pour choisir votre véhicule?</h3>
              <p className="text-blue-100">Notre équipe est à votre disposition pour vous conseiller.</p>
            </div>
            <a 
              href="/contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Nous écrire
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;