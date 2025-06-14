import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Eye, ExternalLink } from 'lucide-react';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const getNutritionGradeColor = (grade?: string) => {
    switch (grade?.toLowerCase()) {
      case 'a': return 'bg-green-100 text-green-800 border-green-200';
      case 'b': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'c': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'd': return 'bg-red-100 text-red-800 border-red-200';
      case 'e': return 'bg-red-200 text-red-900 border-red-300';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const getImageUrl = (product: Product) => {
    return product.image_url || 
           product.image_front_url || 
           'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=400';
  };

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id || product.code}
          className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
        >
          <div className="aspect-square relative overflow-hidden">
            <img
              src={getImageUrl(product)}
              alt={product.product_name || 'Product'}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=400';
              }}
            />
            
            {/* Nutrition Grade Badge */}
            {product.nutrition_grades && (
              <div className={`absolute top-3 left-3 px-2 py-1 rounded-lg text-xs font-semibold border ${getNutritionGradeColor(product.nutrition_grades)}`}>
                Grade {product.nutrition_grades.toUpperCase()}
              </div>
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <Link
                to={`/product/${product.code}`}
                className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center space-x-2"
              >
                <Eye className="w-4 h-4" />
                <span>View Details</span>
              </Link>
            </div>
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2 min-h-[3rem]">
              {product.product_name || 'Unknown Product'}
            </h3>
            
            {product.brands && (
              <p className="text-sm text-gray-600 mb-2 line-clamp-1">
                {product.brands}
              </p>
            )}

            {product.categories && (
              <p className="text-xs text-gray-500 line-clamp-1 mb-3">
                {product.categories}
              </p>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                {product.ecoscore_grade && (
                  <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    Eco {product.ecoscore_grade.toUpperCase()}
                  </div>
                )}
              </div>
              
              <Link
                to={`/product/${product.code}`}
                className="text-green-600 hover:text-green-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};