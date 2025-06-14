import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Scan, Filter, TrendingUp, Star, Users } from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { CategoriesSection } from '../components/CategoriesSection';
import { StatsSection } from '../components/StatsSection';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <StatsSection />
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Exploring Food Products Today
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join millions of users who trust FoodExplorer to make informed food choices.
            Discover, compare, and learn about the food you eat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/search"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Search className="w-5 h-5" />
              <span>Start Searching</span>
            </Link>
            {/* <button className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors inline-flex items-center justify-center space-x-2">
              <Scan className="w-5 h-5" />
              <span>Scan Product</span>
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};