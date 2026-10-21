import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedServices from './components/FeaturedServices';
import CategoryGrid from './components/CategoryGrid';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import BrandLogos from './components/BrandLogos';
import Footer from './components/Footer';
import AdminLayout from './admin/AdminLayout';
import Dashboard from './admin/pages/Dashboard';
import ProductManagement from './admin/pages/ProductManagement';
import CategoryManagement from './admin/pages/CategoryManagement';
import ImportProducts from './admin/pages/ImportProducts';
import { categories, products } from './data/mockData';

function HomePage({ onCategoryClick, onProductClick, onAddToInquiry }) {
  const filteredProducts = products.slice(0, 8);

  return (
    <>
      <Hero />
      <FeaturedServices />
      <CategoryGrid
        categories={categories}
        onCategoryClick={onCategoryClick}
      />
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Izpostavljeni izdelki</h2>
          <ProductGrid
            products={filteredProducts}
            onProductClick={onProductClick}
            onAddToInquiry={onAddToInquiry}
          />
        </div>
      </section>
      <BrandLogos />
    </>
  );
}

function CategoryPage({ onProductClick, onAddToInquiry }) {
  const { categorySlug } = useParams();
  const navigate = useNavigate();

  const category = categories.find(c => c.slug === categorySlug);
  const filteredProducts = category
    ? products.filter(p => p.category === category.slug)
    : [];

  if (!category) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Kategorija ni najdena</h1>
        <button onClick={() => navigate('/')} className="btn-primary">
          Nazaj na domačo stran
        </button>
      </div>
    );
  }

  return (
    <section className="py-8 bg-slate-50 min-h-screen">
      <div className="container-custom">
        <div className="mb-6">
          <button
            onClick={() => navigate('/')}
            className="text-brand-red hover:text-red-700 flex items-center gap-2 mb-4"
          >
            ← Nazaj na domačo stran
          </button>
          <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
          <p className="text-slate-600">
            {filteredProducts.length} izdelkov
          </p>
        </div>
        <ProductGrid
          products={filteredProducts}
          onProductClick={onProductClick}
          onAddToInquiry={onAddToInquiry}
          showFilters={true}
        />
      </div>
    </section>
  );
}

function ProductPage({ onAddToInquiry }) {
  const { productSku } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.sku === productSku);

  if (!product) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Izdelek ni najden</h1>
        <button onClick={() => navigate('/')} className="btn-primary">
          Nazaj na domačo stran
        </button>
      </div>
    );
  }

  const category = categories.find(c => c.slug === product.category);

  return (
    <ProductDetail
      product={product}
      onBack={() => category ? navigate(`/c/${category.slug}`) : navigate('/')}
      onAddToInquiry={onAddToInquiry}
    />
  );
}

function PublicLayout({ children, cartCount, onCategoryClick }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        cartCount={cartCount}
        onLogoClick={() => navigate('/')}
        categories={categories}
        onCategoryClick={onCategoryClick}
      />
      <main className="flex-grow">
        {children}
      </main>
      <Footer categories={categories} />
    </div>
  );
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);

  const isAdminRoute = location.pathname.startsWith('/admin');

  const handleCategoryClick = (category) => {
    navigate(`/c/${category.slug}`);
  };

  const handleProductClick = (product) => {
    navigate(`/p/${product.sku}`);
  };

  const handleAddToInquiry = (product) => {
    setCartCount(prev => prev + 1);
    alert(`${product.name} dodano v povpraševanje!`);
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (isAdminRoute) {
    return (
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ProductManagement />} />
          <Route path="categories" element={<CategoryManagement />} />
          <Route path="import" element={<ImportProducts />} />
          <Route path="settings" element={
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold">Settings</h2>
              <p className="text-slate-600 mt-2">Coming soon...</p>
            </div>
          } />
        </Route>
      </Routes>
    );
  }

  return (
    <PublicLayout cartCount={cartCount} onCategoryClick={handleCategoryClick}>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onCategoryClick={handleCategoryClick}
              onProductClick={handleProductClick}
              onAddToInquiry={handleAddToInquiry}
            />
          }
        />
        <Route
          path="/c/:categorySlug"
          element={
            <CategoryPage
              onProductClick={handleProductClick}
              onAddToInquiry={handleAddToInquiry}
            />
          }
        />
        <Route
          path="/p/:productSku"
          element={
            <ProductPage onAddToInquiry={handleAddToInquiry} />
          }
        />
        <Route
          path="*"
          element={
            <div className="py-16 text-center">
              <h1 className="text-3xl font-bold mb-4">404 - Stran ni najdena</h1>
              <button onClick={() => navigate('/')} className="btn-primary">
                Nazaj na domačo stran
              </button>
            </div>
          }
        />
      </Routes>
    </PublicLayout>
  );
}

export default App;
