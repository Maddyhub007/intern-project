import { Product } from '../types';

const BASE_URL = 'https://world.openfoodfacts.org';


export const searchProducts = async (query: string): Promise<Product[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/cgi/search.pl?search_terms=${encodeURIComponent(query)}&json=true&page_size=24`
    );
    
    if (!response.ok) {
      throw new Error('Search failed');
    }
    
    const data = await response.json();
    return data.products || [];
  } catch (error) {
    console.error('Search error:', error);
    throw error;
  }
};

export const getProductByBarcode = async (barcode: string): Promise<Product> => {
  try {
    const response = await fetch(`${BASE_URL}/api/v0/product/${barcode}.json`);
    
    if (!response.ok) {
      throw new Error('Product not found');
    }
    
    const data = await response.json();
    
    if (!data.product) {
      throw new Error('Product not found');
    }
    
    return data.product;
  } catch (error) {
    console.error('Product fetch error:', error);
    throw error;
  }
};

export const getCategoryProducts = async (category: string): Promise<Product[]> => {
  try {
    const response = await fetch(`${BASE_URL}/category/${encodeURIComponent(category)}.json`);
    
    if (!response.ok) {
      throw new Error('Category fetch failed');
    }
    
    const data = await response.json();
    return data.products || [];
  } catch (error) {
    console.error('Category fetch error:', error);
    throw error;
  }
};