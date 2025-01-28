import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by FitStream</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-purple-600">Terms</a>
            <a href="#" className="text-gray-600 hover:text-purple-600">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-purple-600">Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;