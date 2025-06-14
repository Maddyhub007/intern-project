import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, SortAsc, Loader2 } from 'lucide-react';
import { SearchFilters } from '../components/SearchFilters';
import { ProductGrid } from '../components/ProductGrid';
import { searchProducts } from '../services/api';
import { Product } from '../types';

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchQuery(query);
      handleSearch(query);
    }
  }, [searchParams]);

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const results = await searchProducts(query);
      setProducts(results);
    } catch (err) {
      setError('Failed to search products. Please try again.');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
    }
  };

  const handleSort = (products: Product[]) => {
    switch (sortBy) {
      case 'name':
        return [...products].sort((a, b) => 
          (a.product_name || '').localeCompare(b.product_name || '')
        );
      case 'grade':
        return [...products].sort((a, b) => {
          const gradeA = a.nutrition_grades || 'z';
          const gradeB = b.nutrition_grades || 'z';
          return gradeA.localeCompare(gradeB);
        });
      default:
        return products;
    }
  };

  const sortedProducts = handleSort(products);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <form onSubmit={handleSearchSubmit} className="mb-4">
            <div className="relative max-w-2xl">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for food products..."
                className="w-full pl-12 pr-4 py-3 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </button>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="relevance">Sort by Relevance</option>
                <option value="name">Sort by Name</option>
                <option value="grade">Sort by Nutrition Grade</option>
              </select>
            </div>

            {products.length > 0 && (
              <p className="text-sm text-gray-600">
                Found {products.length} products
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 flex-shrink-0">
              <SearchFilters />
            </div>
          )}

          {/* Results */}
          <div className="flex-1">
            {loading && (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 text-green-600 animate-spin" />
                <span className="ml-2 text-gray-600">Searching products...</span>
              </div>
            )}

            {error && (
              <div className="text-center py-12">
                <div className="text-red-600 mb-4">{error}</div>
                <button
                  onClick={() => handleSearch(searchQuery)}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            )}

            {!loading && !error && products.length === 0 && searchQuery && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your search terms or filters.</p>
              </div>
            )}

            {!loading && sortedProducts.length > 0 && (
              <ProductGrid products={sortedProducts} />
            )}

            {!searchQuery && !loading && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Start your search</h3>
                <p className="text-gray-600">Enter a product name, brand, or ingredient to get started.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};