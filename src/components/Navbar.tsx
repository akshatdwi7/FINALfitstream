import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Dumbbell } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-800">FitStream</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-purple-600">
              Home
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-purple-600">
              Blog
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-purple-600">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-purple-600">
              Contact
            </Link>
            <Link to="/join" className="text-gray-600 hover:text-purple-600">
              Join Stream
            </Link>
            <Link
              to="/go-live"
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
            >
              Go Live
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-purple-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-600 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-600 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-600 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-600 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/join"
                className="block px-3 py-2 text-gray-600 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Join Stream
              </Link>
              <Link
                to="/go-live"
                className="block px-3 py-2 bg-purple-600 text-white rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Go Live
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
