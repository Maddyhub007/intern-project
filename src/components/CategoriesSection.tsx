import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'beverages',
    title: 'Beverages',
    description: 'Soft drinks, juices, water, coffee, tea',
    image: 'https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?auto=compress&cs=tinysrgb&w=400',
    gradient: 'from-blue-400 to-blue-600'
  },
  {
    name: 'dairy',
    title: 'Dairy Products',
    description: 'Milk, cheese, yogurt, butter',
    image: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=400',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    name: 'snacks',
    title: 'Snacks',
    description: 'Chips, crackers, nuts, cookies',
    image: 'https://images.pexels.com/photos/1337824/pexels-photo-1337824.jpeg?auto=compress&cs=tinysrgb&w=400',
    gradient: 'from-red-400 to-pink-500'
  },
  {
    name: 'cereals-and-potatoes',
    title: 'Cereals & Grains',
    description: 'Bread, pasta, rice, cereals',
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400',
    gradient: 'from-amber-400 to-yellow-600'
  },
  {
    name: 'fruits-and-vegetables',
    title: 'Fruits & Vegetables',
    description: 'Fresh produce, canned, frozen',
    image: 'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=400',
    gradient: 'from-green-400 to-green-600'
  },
  {
    name: 'meat',
    title: 'Meat & Seafood',
    description: 'Fresh meat, poultry, fish, seafood',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    gradient: 'from-purple-400 to-purple-600'
  }
];

export const CategoriesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our extensive collection of food categories to find exactly what you're looking for.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/category/${category.name}`}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm opacity-90 mb-3">{category.description}</p>
                  <div className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/search"
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};