import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Filter } from 'lucide-react';

type Category = 'all' | 'machine' | 'accessory' | 'book';

const Products: React.FC = () => {
  const [filter, setFilter] = useState<Category>('all');

  const filteredProducts = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'All Products' },
    { id: 'machine', label: 'Machines' },
    { id: 'accessory', label: 'Accessories' },
    { id: 'book', label: 'Books & Learning' },
  ];

  return (
    <div className="bg-white min-h-screen">
       <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-xl text-gray-500 font-light">Explore the world of Bernina and bernette.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-16 space-y-4 md:space-y-0">
          <div className="flex items-center bg-gray-100 rounded-full p-1.5 shadow-inner">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-white text-bernina-red shadow-md transform scale-105'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map(product => (
            <div key={product.id} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full overflow-hidden">
              <div className="relative aspect-w-4 aspect-h-3 overflow-hidden bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-72 object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-bernina-red shadow-sm uppercase tracking-wider backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-8 flex-1 leading-relaxed">{product.description}</p>
                <div className="mt-auto">
                   <a 
                    href={`https://wa.me/27720834060?text=I'm interested in the ${product.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-center py-3.5 rounded-full font-bold transition-all duration-300 uppercase text-sm tracking-wide"
                   >
                     Enquire Now
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;