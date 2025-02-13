import React from 'react';
import { Menu, X, Server, Shield, Cloud, Database } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Server className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">CKTS</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-600">Experience</a>
            <a href="#team" className="text-gray-600 hover:text-blue-600">Team</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block text-gray-600 hover:text-blue-600">Home</a>
            <a href="#about" className="block text-gray-600 hover:text-blue-600">About</a>
            <a href="#services" className="block text-gray-600 hover:text-blue-600">Services</a>
            <a href="#experience" className="block text-gray-600 hover:text-blue-600">Experience</a>
            <a href="#team" className="block text-gray-600 hover:text-blue-600">Team</a>
            <a href="#contact" className="block text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;