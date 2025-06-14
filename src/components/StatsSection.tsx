import React from 'react';
import { Database, Users, Globe, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Database,
    value: '2.8M+',
    label: 'Food Products',
    description: 'Comprehensive database of products worldwide'
  },
  {
    icon: Users,
    value: '100K+',
    label: 'Active Contributors',
    description: 'Community-driven data collection'
  },
  {
    icon: Globe,
    value: '180+',
    label: 'Countries',
    description: 'Global product coverage'
  },
  {
    icon: TrendingUp,
    value: '99.9%',
    label: 'Uptime',
    description: 'Reliable service you can count on'
  }
];

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Millions Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform is powered by one of the world's largest open food databases,
            continuously growing with contributions from users around the globe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-2">
                  {stat.label}
                </div>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};