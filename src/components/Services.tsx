import React from 'react';
import { Server, Shield, Cloud, Database } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
      <Icon className="h-8 w-8 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "Server Management",
      description: "Expert server management ensuring maximum uptime and optimal performance for your business."
    },
    {
      icon: Shield,
      title: "Firewall Configuration",
      description: "Robust firewall setup and management to protect your network from external threats."
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "End-to-end cloud solutions including migration, optimization, and management."
    },
    {
      icon: Database,
      title: "On-Premises Solutions",
      description: "Customized on-premises infrastructure solutions tailored to your specific needs."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;