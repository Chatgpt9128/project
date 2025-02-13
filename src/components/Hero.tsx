import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted IT Partner
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              6+ Years of Expertise in Server Management, Firewall Configuration, and Cloud Solutions
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us for a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1560732488-6b0df240254a?auto=format&fit=crop&q=80&w=800"
              alt="Server Room"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;