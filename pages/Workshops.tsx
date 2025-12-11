import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { WORKSHOPS } from '../constants';

const Workshops: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4">Workshops & Classes</h1>
          <p className="text-xl text-gray-500 font-light">Expand your skills with our expert-led training sessions.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          {WORKSHOPS.map(workshop => (
            <div key={workshop.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={workshop.image} 
                  alt={workshop.title} 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-0 right-0 bg-bernina-red text-white px-4 py-2 rounded-bl-xl font-bold">
                    {workshop.price}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">{workshop.title}</h3>
                <p className="text-gray-600 mb-6 flex-1 leading-relaxed">{workshop.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center text-sm text-gray-500 bg-gray-50 p-2 rounded-lg">
                      <Calendar className="h-4 w-4 mr-2 text-bernina-red" />
                      {workshop.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 bg-gray-50 p-2 rounded-lg">
                      <Clock className="h-4 w-4 mr-2 text-bernina-red" />
                      {workshop.time}
                    </div>
                </div>
                
                <a 
                  href={`https://wa.me/27720834060?text=I would like to book the ${workshop.title} workshop`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex justify-center items-center px-4 py-3 border border-transparent text-sm font-bold rounded-full text-white bg-bernina-red hover:bg-bernina-dark transition-colors uppercase tracking-wider"
                >
                  Book via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl p-10 text-center shadow-sm">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Don't see what you're looking for?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">We often host custom sessions for Embroidery Software and specific techniques. Contact us to request a topic!</p>
            <a href="/contact" className="inline-block text-bernina-red font-bold hover:text-bernina-dark border-b-2 border-bernina-red pb-1 transition-colors">Contact Us &rarr;</a>
        </div>
      </div>
    </div>
  );
};

export default Workshops;