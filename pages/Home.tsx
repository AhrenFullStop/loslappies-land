import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../constants';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(p => p.featured);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white overflow-hidden h-[600px] md:h-[700px]">
        <div className="absolute inset-0">
          <img 
            src="https://www.loslappies.co.za/wp/wp-content/uploads/2021/06/BatikNewArrivals-1200x732.jpg" 
            alt="Colorful Batik Fabrics" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center animate-fade-in-up">
          <span className="text-bernina-red font-bold tracking-widest uppercase mb-4 text-sm md:text-base">Authorized Bernina Dealer</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-6 leading-tight">
            Where Sewing Dreams <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bernina-red to-red-400">Come True</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl font-light">
            Unleash your creativity with the precision of Bernina and the vibrance of our fabric collections. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/products" 
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-bernina-red hover:bg-bernina-dark transition-all shadow-lg hover:shadow-red-900/50 hover:-translate-y-1"
            >
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/workshops" 
              className="inline-flex justify-center items-center px-8 py-4 border-2 border-white text-base font-bold rounded-full text-white hover:bg-white hover:text-gray-900 transition-all hover:-translate-y-1"
            >
              Join a Workshop
            </Link>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-24 h-1 bg-bernina-red mx-auto mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Welcome to Loslappies Land</h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            We are passionate about creativity, precision, and quality. Located in Roodepoort, we are your destination for the finest sewing machines and education. Whether you are a professional needing the flagship 
            <span className="font-semibold text-bernina-red mx-1">Bernina 880</span> or a hobbyist starting your journey, we have the perfect companion for your dreams.
          </p>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Featured Collections</h2>
               <p className="mt-2 text-gray-500">Hand-picked favorites just for you.</p>
            </div>
            <Link to="/products" className="text-bernina-red font-bold hover:text-bernina-dark flex items-center group transition-colors">
              View all <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100">
                <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10"></div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-80 object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="text-xs font-bold text-bernina-red uppercase tracking-wide mb-2">{product.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">{product.description}</p>
                  <Link 
                    to="/products" 
                    className="inline-block text-gray-900 font-bold border-b-2 border-bernina-red pb-1 hover:text-bernina-red transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 bg-bernina-dark overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Need a Tune Up?</h2>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
            Our expert technicians are ready to service your machine. Keep your creativity running smoothly with a regular check-up.
          </p>
          <Link 
            to="/services" 
            className="inline-block bg-white text-bernina-red hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Book a Repair
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;