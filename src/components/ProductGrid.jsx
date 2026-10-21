import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { SlidersHorizontal, Grid3x3, List, X } from 'lucide-react';

const ProductGrid = ({ products, onProductClick, onAddToInquiry, showFilters = false }) => {
  const [viewMode, setViewMode] = useState('grid');
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedColors, setSelectedColors] = useState([]);

  return (
    <div className="space-y-6">
      {showFilters && (
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span className="font-medium">Filtri</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600 mr-2">Prikaz:</span>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-brand-red text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-brand-red text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <div className="flex gap-6">
        {/* Filter Sidebar */}
        {showFilters && filterOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">Filtri</h3>
                <button onClick={() => setFilterOpen(false)} className="lg:hidden">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Cena (€)</h4>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span>{priceRange[0]} €</span>
                      <span>{priceRange[1]} €</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Barva</h4>
                  <div className="grid grid-cols-5 gap-2">
                    {['red', 'blue', 'green', 'black', 'white'].map(color => (
                      <button
                        key={color}
                        onClick={() => {
                          setSelectedColors(prev =>
                            prev.includes(color)
                              ? prev.filter(c => c !== color)
                              : [...prev, color]
                          );
                        }}
                        className={`w-10 h-10 rounded-full border-2 transition-all ${
                          selectedColors.includes(color)
                            ? 'border-brand-red scale-110'
                            : 'border-slate-300'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Tehnika tiska</h4>
                  <div className="space-y-2">
                    {['UV Tisk', 'Sitotisk', 'Vezenje', 'Graviranje'].map(tech => (
                      <label key={tech} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded text-brand-red focus:ring-brand-red" />
                        <span className="text-sm">{tech}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Razpoložljivost</h4>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-brand-red focus:ring-brand-red" />
                    <span className="text-sm">Samo na zalogi</span>
                  </label>
                </div>

                <button className="w-full btn-secondary text-sm">
                  Počisti filtre
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Products Grid */}
        <div className="flex-1">
          <div className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-4'
          }>
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                viewMode={viewMode}
                onProductClick={onProductClick}
                onAddToInquiry={onAddToInquiry}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
