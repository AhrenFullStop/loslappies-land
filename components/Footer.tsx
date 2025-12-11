import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Loslappies Land</h3>
            <p className="text-gray-400 mb-4">Where Sewing Dreams Come True.</p>
            <p className="text-gray-400 text-sm">
              Your authorized Bernina and bernette dealer in Roodepoort. Passionate about precision and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-bernina-red transition-colors">Machines & Accessories</Link></li>
              <li><Link to="/workshops" className="text-gray-400 hover:text-bernina-red transition-colors">Workshops</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-bernina-red transition-colors">Repairs & Service</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-bernina-red transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 mt-0.5 text-bernina-red shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-bernina-red shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white">{CONTACT_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MessageCircle className="h-5 w-5 text-bernina-red shrink-0" />
                <a href="https://wa.me/27720834060" target="_blank" rel="noreferrer" className="hover:text-white">{CONTACT_INFO.whatsapp}</a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-bernina-red shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white">{CONTACT_INFO.email}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Loslappies Land. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;