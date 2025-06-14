import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface IngredientsListProps {
  ingredientsText: string;
  allergens?: string;
}

export const IngredientsList: React.FC<IngredientsListProps> = ({ 
  ingredientsText, 
  allergens 
}) => {
  const allergensList = allergens ? allergens.split(',').map(a => a.trim().toLowerCase()) : [];
  
  const formatIngredients = (text: string) => {
    // Split by common separators and clean up
    return text.split(/[,;]/).map(ingredient => ingredient.trim()).filter(Boolean);
  };

  const ingredients = formatIngredients(ingredientsText);

  const isAllergen = (ingredient: string) => {
    const lowercaseIngredient = ingredient.toLowerCase();
    return allergensList.some(allergen => 
      lowercaseIngredient.includes(allergen) || allergen.includes(lowercaseIngredient)
    );
  };

  return (
    <div className="space-y-6">
      {/* Allergens Warning */}
      {allergens && (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-orange-900 mb-1">Contains Allergens</h4>
              <p className="text-sm text-orange-800">{allergens}</p>
            </div>
          </div>
        </div>
      )}

      {/* Ingredients List */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="grid gap-2">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className={`px-3 py-2 rounded-lg text-sm ${
                isAllergen(ingredient)
                  ? 'bg-orange-100 text-orange-900 border border-orange-200'
                  : 'bg-gray-50 text-gray-800'
              }`}
            >
              <span className="font-medium">{index + 1}.</span> {ingredient}
              {isAllergen(ingredient) && (
                <span className="ml-2 text-xs text-orange-700 font-medium">
                  (Contains allergen)
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="text-xs text-gray-500">
        Ingredients are listed in descending order of weight. Ingredients that may contain allergens are highlighted.
      </div>
    </div>
  );
};