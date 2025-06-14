import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Share2, Heart, Loader2, AlertCircle } from 'lucide-react';
import { getProductByBarcode } from '../services/api';
import { Product } from '../types';
import { NutritionTable } from '../components/NutritionTable';
import { IngredientsList } from '../components/IngredientsList';

export const ProductPage: React.FC = () => {
  const { barcode } = useParams<{ barcode: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (barcode) {
      fetchProduct(barcode);
    }
  }, [barcode]);

  const fetchProduct = async (code: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const productData = await getProductByBarcode(code);
      setProduct(productData);
    } catch (err) {
      setError('Product not found or failed to load. Please try again.');
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

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
           'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=800';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-green-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link
            to="/search"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Search</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/search"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Search</span>
            </Link>
            
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-6">
            <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={getImageUrl(product)}
                alt={product.product_name || 'Product'}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=800';
                }}
              />
            </div>
            
            {/* Additional Images */}
            <div className="grid grid-cols-4 gap-3">
              {[product.image_front_url, product.image_ingredients_url, product.image_nutrition_url].filter(Boolean).map((imageUrl, index) => (
                <div key={index} className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm">
                  <img
                    src={imageUrl}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {product.product_name || 'Unknown Product'}
                  </h1>
                  {product.brands && (
                    <p className="text-lg text-gray-600">{product.brands}</p>
                  )}
                </div>
                
                <div className="flex flex-col space-y-2">
                  {product.nutrition_grades && (
                    <div className={`px-3 py-2 rounded-lg text-sm font-semibold border ${getNutritionGradeColor(product.nutrition_grades)}`}>
                      Nutri-Score {product.nutrition_grades.toUpperCase()}
                    </div>
                  )}
                  {product.ecoscore_grade && (
                    <div className="px-3 py-2 rounded-lg text-sm font-semibold bg-blue-100 text-blue-800 border border-blue-200">
                      Eco-Score {product.ecoscore_grade.toUpperCase()}
                    </div>
                  )}
                </div>
              </div>

              {product.generic_name && (
                <p className="text-gray-700 mb-4">{product.generic_name}</p>
              )}

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Barcode:</span>
                  <span className="ml-2 text-gray-600">{product.code}</span>
                </div>
                {product.quantity && (
                  <div>
                    <span className="font-medium text-gray-900">Quantity:</span>
                    <span className="ml-2 text-gray-600">{product.quantity}</span>
                  </div>
                )}
                {product.packaging && (
                  <div>
                    <span className="font-medium text-gray-900">Packaging:</span>
                    <span className="ml-2 text-gray-600">{product.packaging}</span>
                  </div>
                )}
                {product.countries && (
                  <div>
                    <span className="font-medium text-gray-900">Countries:</span>
                    <span className="ml-2 text-gray-600">{product.countries}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Categories */}
            {product.categories && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {product.categories.split(',').slice(0, 6).map((category, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {category.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Nutrition Table */}
            {product.nutriments && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Nutrition Facts</h3>
                <NutritionTable nutriments={product.nutriments} />
              </div>
            )}
          </div>
        </div>

        {/* Ingredients */}
        {product.ingredients_text && (
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Ingredients</h3>
            <IngredientsList 
              ingredientsText={product.ingredients_text}
              allergens={product.allergens || ''}
            />
          </div>
        )}

        {/* Additional Information */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Manufacturing */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Manufacturing</h4>
            <div className="space-y-3 text-sm">
              {product.manufacturing_places && (
                <div>
                  <span className="font-medium text-gray-900">Manufacturing places:</span>
                  <p className="text-gray-600">{product.manufacturing_places}</p>
                </div>
              )}
              {product.origins && (
                <div>
                  <span className="font-medium text-gray-900">Origins:</span>
                  <p className="text-gray-600">{product.origins}</p>
                </div>
              )}
            </div>
          </div>

          {/* External Links */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">More Information</h4>
            <div className="space-y-3">
              <a
                href={`https://world.openfoodfacts.org/product/${product.code}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View on OpenFoodFacts</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};