import React from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4">Services & Repairs</h1>
          <p className="text-xl text-gray-500 font-light">Professional care for your precious machine.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SERVICES.map((service) => {
             // Dynamic icon rendering
             const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;
             
             return (
              <div key={service.id} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-red-50 text-bernina-red mb-8 transform rotate-3 hover:rotate-6 transition-transform">
                  <IconComponent className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
             );
          })}
        </div>

        <div className="mt-24">
          <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
                <div className="p-12 md:p-16 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Why Service Regularly?</h2>
                  <div className="space-y-4 text-gray-300 mb-8">
                    <p>Sewing machines are precise mechanical instruments. Over time, lint builds up, oil dries out, and timing can drift.</p>
                    <p>We recommend a standard service every <strong>12 to 18 months</strong> depending on usage to ensure:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-2 text-white/80">
                      <li>Smooth fabric feeding</li>
                      <li>Perfect stitch tension</li>
                      <li>Longer machine lifespan</li>
                      <li>Prevention of costly breakages</li>
                    </ul>
                  </div>
                  <a 
                    href="/contact" 
                    className="inline-block w-fit bg-bernina-red hover:bg-white hover:text-bernina-red text-white font-bold py-4 px-8 rounded-full transition-colors"
                  >
                    Find Our Workshop
                  </a>
                </div>
                <div className="bg-gray-800 relative h-64 md:h-auto">
                    <img src="https://www.loslappies.co.za/wp/wp-content/uploads/2021/01/b880_straight_low_res_with_reflection_1_800x.jpg" className="w-full h-full object-cover opacity-50 mix-blend-overlay" alt="Machine Internal" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <Icons.Settings className="h-32 w-32 text-white/10 animate-spin-slow" />
                     </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;