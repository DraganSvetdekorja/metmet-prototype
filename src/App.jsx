import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedServices from './components/FeaturedServices';
import CategoryGrid from './components/CategoryGrid';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import BrandLogos from './components/BrandLogos';
import Footer from './components/Footer';
import { categories, products } from './data/mockData';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'category', 'product'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentView('category');
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentView('product');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedCategory(null);
    setSelectedProduct(null);
  };

  const handleBackToCategory = () => {
    setCurrentView('category');
    setSelectedProduct(null);
  };

  const handleAddToInquiry = (product) => {
    setCartCount(prev => prev + 1);
    // In a real app, this would add to a cart state
    alert(`${product.name} dodano v povpraševanje!`);
  };

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory.slug)
    : products.slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        cartCount={cartCount}
        onLogoClick={handleBackToHome}
        categories={categories}
        onCategoryClick={handleCategoryClick}
      />

      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero />
            <FeaturedServices />
            <CategoryGrid
              categories={categories}
              onCategoryClick={handleCategoryClick}
            />
            <section className="py-16 bg-white">
              <div className="container-custom">
                <h2 className="text-3xl font-bold mb-8 text-center">Izpostavljeni izdelki</h2>
                <ProductGrid
                  products={filteredProducts}
                  onProductClick={handleProductClick}
                  onAddToInquiry={handleAddToInquiry}
                />
              </div>
            </section>
            <BrandLogos />
          </>
        )}

        {currentView === 'category' && (
          <section className="py-8 bg-slate-50 min-h-screen">
            <div className="container-custom">
              <div className="mb-6">
                <button
                  onClick={handleBackToHome}
                  className="text-brand-red hover:text-red-700 flex items-center gap-2 mb-4"
                >
                  ← Nazaj na domačo stran
                </button>
                <h1 className="text-4xl font-bold mb-2">{selectedCategory?.name}</h1>
                <p className="text-slate-600">
                  {filteredProducts.length} izdelkov
                </p>
              </div>
              <ProductGrid
                products={filteredProducts}
                onProductClick={handleProductClick}
                onAddToInquiry={handleAddToInquiry}
                showFilters={true}
              />
            </div>
          </section>
        )}

        {currentView === 'product' && selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onBack={selectedCategory ? handleBackToCategory : handleBackToHome}
            onAddToInquiry={handleAddToInquiry}
          />
        )}
      </main>

      <Footer categories={categories} />
    </div>
  );
}

export default App;
