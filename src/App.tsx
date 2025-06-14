import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { ProductPage } from './pages/ProductPage';
import { CategoryPage } from './pages/CategoryPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/product/:barcode" element={<ProductPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;