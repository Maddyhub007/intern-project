import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { ProductGrid } from '../components/ProductGrid';
import { searchProducts } from '../services/api';
import { Product } from '../types';

export const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (category) {
      fetchCategoryProducts(category);
    }
  }, [category]);

  const fetchCategoryProducts = async (categoryName: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const categoryProducts = await searchProducts(categoryName);
      setProducts(categoryProducts);
    } catch (err) {
      setError('Failed to load category products. Please try again.');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryTitle = (category: string) => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-green-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading category products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link
                to="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-2"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">
                {category ? getCategoryTitle(category) : 'Category'}
              </h1>
              {products.length > 0 && (
                <p className="text-gray-600 mt-1">
                  {products.length} products found
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="text-center py-12">
            <div className="text-red-600 mb-4">{error}</div>
            <button
              onClick={() => category && fetchCategoryProducts(category)}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">This category doesn't have any products yet.</p>
          </div>
        )}

        {products.length > 0 && (
          <ProductGrid products={products} />
        )}
      </div>
    </div>
  );
};