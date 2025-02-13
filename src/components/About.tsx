import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800"
              alt="IT Professional"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-gray-600 mb-6">
              Hi, I'm Chaman Kumar, an IT professional with over 6 years of experience in managing servers, 
              firewalls, and cloud infrastructure. I've worked with clients across various industries, 
              ensuring their IT systems are secure, efficient, and scalable.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" />
                <span>Expert in Server Management</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" />
                <span>Certified Cloud Solutions Architect</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" />
                <span>Advanced Firewall Configuration</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" />
                <span>24/7 Technical Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;