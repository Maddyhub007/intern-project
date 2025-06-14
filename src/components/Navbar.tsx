import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Scan, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">FoodExplorer</span>
          </Link>

          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for food products..."
                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-gray-400 hover:text-green-600 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/search"
              className="text-gray-600 hover:text-green-600 transition-colors flex items-center space-x-1"
            >
              <Search className="w-4 h-4" />
              <span>Search</span>
            </Link>
            {/* <button className="text-gray-600 hover:text-green-600 transition-colors flex items-center space-x-1">
              <Scan className="w-4 h-4" />
              <span>Scan</span>
            </button> */}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for food products..."
                  className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-gray-400 hover:text-green-600"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </form>
            <div className="space-y-2">
              <Link
                to="/search"
                className="block px-3 py-2 text-gray-600 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Search Products
              </Link>
              <button className="block w-full text-left px-3 py-2 text-gray-600 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors">
                Scan Barcode
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};