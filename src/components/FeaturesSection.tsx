import React from 'react';
import { Search, Scan, Filter, BarChart3, Shield, Globe } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Smart Search',
    description: 'Find any food product instantly with our powerful search engine. Search by name, brand, or ingredient.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Scan,
    title: 'Barcode Scanner',
    description: 'Simply scan any product barcode to get detailed information, nutrition facts, and ingredient lists.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Filter,
    title: 'Advanced Filters',
    description: 'Filter products by categories, nutrition grades, allergens, and dietary preferences.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: BarChart3,
    title: 'Nutrition Analysis',
    description: 'Get detailed nutrition information, including calories, macronutrients, and health scores.',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: Shield,
    title: 'Trusted Data',
    description: 'All data is sourced from OpenFoodFacts, a collaborative database maintained by millions of users.',
    color: 'bg-red-100 text-red-600'
  },
  {
    icon: Globe,
    title: 'Global Database',
    description: 'Access information about products from around the world with support for multiple languages.',
    color: 'bg-indigo-100 text-indigo-600'
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Food Discovery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to make informed decisions about the food you eat.
            Our comprehensive platform provides detailed insights into millions of products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};