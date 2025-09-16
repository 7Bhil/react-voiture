import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import Navigation from './Navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              Bhil<span className="text-orange-500">$</span>
            </h1>
          </div>
          
          <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-orange-300 transition-colors">
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
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;