import React from 'react';
import { Filter, X } from 'lucide-react';

export const SearchFilters: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Filter className="w-5 h-5 mr-2" />
          Filters
        </h3>
      </div>

      <div className="space-y-6">
        {/* Nutrition Grade */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Nutrition Grade</h4>
          <div className="space-y-2">
            {['A', 'B', 'C', 'D', 'E'].map((grade) => (
              <label key={grade} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <span className={`ml-2 px-2 py-1 rounded text-sm font-medium ${
                  grade === 'A' ? 'bg-green-100 text-green-800' :
                  grade === 'B' ? 'bg-yellow-100 text-yellow-800' :
                  grade === 'C' ? 'bg-orange-100 text-orange-800' :
                  grade === 'D' ? 'bg-red-100 text-red-800' :
                  'bg-red-200 text-red-900'
                }`}>
                  Grade {grade}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
          <div className="space-y-2">
            {[
              'Beverages',
              'Dairy products',
              'Snacks',
              'Cereals and potatoes',
              'Fruits and vegetables',
              'Meat and seafood'
            ].map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <span className="ml-2 text-sm text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Allergens */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Allergens</h4>
          <div className="space-y-2">
            {[
              'Gluten-free',
              'Lactose-free',
              'Vegan',
              'Vegetarian',
              'Nut-free',
              'Egg-free'
            ].map((allergen) => (
              <label key={allergen} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <span className="ml-2 text-sm text-gray-700">{allergen}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Popular Brands</h4>
          <div className="space-y-2">
            {[
              'Coca-Cola',
              'Nestlé',
              'Danone',
              'Unilever',
              'PepsiCo'
            ].map((brand) => (
              <label key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <span className="ml-2 text-sm text-gray-700">{brand}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
          Clear All Filters
        </button>
      </div>
    </div>
  );
};