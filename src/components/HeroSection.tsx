import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Search, Scan, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Discover the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> World </span>
              of Food Products
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Explore millions of food products from around the globe. Find detailed nutrition information, 
              ingredients, and make informed choices about what you eat.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for any food product..."
                    className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-lg transition-all duration-200"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                </div>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
                >
                  <span>Search</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* <button className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-md border border-gray-200 inline-flex items-center justify-center space-x-2">
                <Scan className="w-5 h-5" />
                <span>Scan Barcode</span>
              </button> */}
              <Link 
              to="/search"
              className="text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center space-x-2">
                <span>Browse Categories</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-100 to-blue-100">
              <img
                src="https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh fruits and vegetables"
                className="w-full h-full object-fit"
              />
            </div>
            {/* Floating cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Nutrition Grade A</span>
              </div>
            </div>
            {/* <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <Scan className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">Scan & Discover</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};