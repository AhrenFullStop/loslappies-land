import React from 'react';
import { MapPin, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4">Our Story</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">The heart and soul of sewing in Roodepoort.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="prose prose-lg mx-auto text-gray-600">
          <div className="flex justify-center mb-12">
            <img 
                src="https://www.loslappies.co.za/wp/wp-content/uploads/2021/01/Bernina_logo-3.jpg" 
                alt="Bernina Logo" 
                className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          
          <p className="lead text-3xl font-serif text-gray-900 mb-10 text-center italic border-l-4 border-bernina-red pl-6 py-2 bg-gray-50">
            "Creativity is contagious, pass it on."
          </p>
          
          <p className="mb-8">
            Located in the heart of Roodepoort, <strong>Loslappies Land</strong> has established itself as the premier destination for sewing enthusiasts. 
            We are more than just a shop; we are a community hub where beginners become experts and experts find new inspiration.
          </p>
          <p className="mb-8">
            As an authorized <strong>Bernina</strong> and <strong>bernette</strong> dealer, we stand by the quality of Swiss engineering. 
            We believe that your sewing machine should be an extension of your creativity, not a hindrance. That's why we specialize in matching 
            each customer with the machine that fits their dreams and their budget.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-16">
             <div className="bg-red-50 p-8 rounded-2xl">
                <Award className="h-10 w-10 text-bernina-red mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Knowledge</h3>
                <p>Ansie and the team have years of experience in embroidery and sewing techniques.</p>
             </div>
             <div className="bg-gray-50 p-8 rounded-2xl">
                <Award className="h-10 w-10 text-gray-700 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Full Support</h3>
                <p>We don't just sell boxes. We offer mastery classes, repairs, and ongoing support.</p>
             </div>
          </div>
        </div>
      </div>
      
      <div className="bg-bernina-red py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center p-6 bg-white rounded-full shadow-lg mb-8">
                <MapPin className="h-10 w-10 text-bernina-red" />
            </div>
            <h3 className="text-3xl font-serif font-bold text-white mb-4">Visit Our Store</h3>
            <p className="text-red-100 text-xl mb-8">187 Ontdekkers Service Road, Horizon Park, Roodepoort</p>
            <a href="/contact" className="bg-white text-bernina-red px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">Get Directions</a>
        </div>
      </div>
    </div>
  );
};

export default About;