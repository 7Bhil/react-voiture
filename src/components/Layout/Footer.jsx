import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo et description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Bhil<span className="text-orange-500">$</span>
            </h2>
            <p className="text-blue-100 mb-4">
              Votre agence de location et vente de véhicules à Porto-Novo, Bénin. 
              Service de qualité et tarifs compétitifs.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/bhil.chitou" className="text-white hover:text-orange-300 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-orange-300 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-orange-300 transition-colors">
                <FaWhatsapp size={20} />
              </a>
              <a href="#" className="text-white hover:text-orange-300 transition-colors">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              {['Accueil', 'Véhicules', 'Réservation', 'À propos', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Accueil' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-blue-100 hover:text-orange-300 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horaires d'ouverture</h3>
            <div className="flex items-start mb-2">
              <FaClock className="mt-1 mr-3 text-orange-400" />
              <div>
                <p className="font-medium">Lundi - Vendredi</p>
                <p className="text-blue-100">8h00 - 18h00</p>
              </div>
            </div>
            <div className="flex items-start mb-2">
              <FaClock className="mt-1 mr-3 text-orange-400" />
              <div>
                <p className="font-medium">Samedi</p>
                <p className="text-blue-100">9h00 - 17h00</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaClock className="mt-1 mr-3 text-orange-400" />
              <div>
                <p className="font-medium">Dimanche</p>
                <p className="text-blue-100">10h00 - 14h00</p>
              </div>
            </div>
          </div>

          {/* Contact - Porto-Novo */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex items-start mb-3">
              <FaMapMarkerAlt className="mt-1 mr-3 text-orange-400" />
              <p className="text-blue-100">Agbokou a côté de l'ecole le prodige<br />Porto-Novo, Bénin</p>
            </div>
            <div className="flex items-start mb-3">
              <FaPhone className="mt-1 mr-3 text-orange-400" />
              <p className="text-blue-100">+229 01 98 87 40 19</p>
            </div>
            <div className="flex items-start">
              <FaEnvelope className="mt-1 mr-3 text-orange-400" />
              <p className="text-blue-100">7Bhilal.chitou7@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Carte Google Maps pour Porto-Novo */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126575.338091425!2d2.583333!3d6.483333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10244e5c10000001%3A0x5b5c5c5c5c5c5c5c!2sPorto-Novo%2C%20B%C3%A9nin!5e0!3m2!1sfr!2sfr!4v1690212345678!5m2!1sfr!2sfr"
            width="100%" 
            height="250" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation de Bhilcars à Porto-Novo"
          ></iframe>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 pt-6 text-center">
          <p className="text-blue-200">
            &copy; {new Date().getFullYear()} Bhilcars Bénin. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;