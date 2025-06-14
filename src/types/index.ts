export interface Product {
  id?: string;
  code: string;
  product_name?: string;
  generic_name?: string;
  brands?: string;
  categories?: string;
  ingredients_text?: string;
  allergens?: string;
  nutrition_grades?: string;
  ecoscore_grade?: string;
  image_url?: string;
  image_front_url?: string;
  image_ingredients_url?: string;
  image_nutrition_url?: string;
  quantity?: string;
  packaging?: string;
  countries?: string;
  manufacturing_places?: string;
  origins?: string;
  nutriments?: {
    [key: string]: string | number;
  };
}

export interface SearchParams {
  query?: string;
  category?: string;
  nutrition_grade?: string;
  sort_by?: string;
  page?: number;
  page_size?: number;
}