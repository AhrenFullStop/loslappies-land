import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="block">
              <img 
                src="https://www.loslappies.co.za/wp/wp-content/uploads/2021/01/Loslappies-Land-New-Logo-1024x223.jpg" 
                alt="Loslappies Land" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm uppercase tracking-wider font-semibold transition-all duration-300 relative group ${
                  isActive(link.path)
                    ? 'text-bernina-red'
                    : 'text-gray-600 hover:text-bernina-red'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-bernina-red transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            <a 
              href="https://wa.me/27720834060" 
              target="_blank" 
              rel="noreferrer"
              className="bg-bernina-red hover:bg-bernina-dark text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-bernina-red focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-bold ${
                  isActive(link.path)
                    ? 'text-bernina-red bg-red-50'
                    : 'text-gray-700 hover:text-bernina-red hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
             <a 
              href="https://wa.me/27720834060" 
              target="_blank" 
              rel="noreferrer"
              className="block w-full text-center mt-6 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-bold transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;