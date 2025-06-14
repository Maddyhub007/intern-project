import React from 'react';

interface Nutriments {
  [key: string]: string | number;
}

interface NutritionTableProps {
  nutriments: Nutriments;
}

export const NutritionTable: React.FC<NutritionTableProps> = ({ nutriments }) => {
  const nutritionData = [
    { key: 'energy', label: 'Energy', unit: 'kJ' },
    { key: 'energy-kcal', label: 'Calories', unit: 'kcal' },
    { key: 'fat', label: 'Fat', unit: 'g' },
    { key: 'saturated-fat', label: 'Saturated Fat', unit: 'g' },
    { key: 'carbohydrates', label: 'Carbohydrates', unit: 'g' },
    { key: 'sugars', label: 'Sugars', unit: 'g' },
    { key: 'fiber', label: 'Fiber', unit: 'g' },
    { key: 'proteins', label: 'Proteins', unit: 'g' },
    { key: 'salt', label: 'Salt', unit: 'g' },
    { key: 'sodium', label: 'Sodium', unit: 'mg' }
  ];

  const getValue = (key: string) => {
    const value = nutriments[`${key}_100g`] || nutriments[key];
    if (value !== undefined && value !== null && value !== '') {
      return parseFloat(value.toString()).toFixed(2);
    }
    return null;
  };

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 font-semibold text-gray-900">Nutrient</th>
              <th className="text-right py-3 font-semibold text-gray-900">Per 100g</th>
            </tr>
          </thead>
          <tbody>
            {nutritionData.map((item) => {
              const value = getValue(item.key);
              if (value === null) return null;
              
              return (
                <tr key={item.key} className="border-b border-gray-100">
                  <td className="py-2 text-gray-700">{item.label}</td>
                  <td className="py-2 text-right font-medium text-gray-900">
                    {value} {item.unit}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-xs text-gray-500">
        * Values are per 100g of product
      </div>
    </div>
  );
};