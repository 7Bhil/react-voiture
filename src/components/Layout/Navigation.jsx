import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/cars', label: 'Véhicules' },
    { path: '/booking', label: 'Réservation' },
    { path: '/about', label: 'À propos' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <nav className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`transition-colors font-medium ${
              location.pathname === item.path
                ? 'text-orange-300'
                : 'text-white hover:text-orange-300'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 absolute top-full left-0 right-0 bg-blue-900 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-2 px-4 rounded transition-colors font-medium ${
                    location.pathname === item.path
                      ? 'bg-blue-800 text-orange-300'
                      : 'text-white hover:bg-blue-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;