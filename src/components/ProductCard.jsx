import { motion } from 'framer-motion';
import { ShoppingCart, Eye, Heart } from 'lucide-react';

const ProductCard = ({ product, index, viewMode = 'grid', onProductClick, onAddToInquiry }) => {
  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
        className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
      >
        <div className="flex gap-6 p-4">
          <div className="w-48 h-48 flex-shrink-0 overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-xs text-slate-500 mb-1">ŠIFRA: {product.sku}</p>
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
              </div>
              <div className="flex gap-2">
                {product.badges?.map(badge => (
                  <span key={badge} className="px-2 py-1 bg-brand-red text-white text-xs font-bold rounded">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-4 line-clamp-2">{product.description}</p>

            <div className="flex items-center gap-4 mb-4">
              <div>
                <p className="text-2xl font-bold text-brand-red">{product.price.toFixed(2)} €</p>
                <p className="text-xs text-slate-500">+ DDV</p>
              </div>
              <div className="text-sm text-slate-600">
                <p className="font-medium">z DDV: {product.priceWithVat.toFixed(2)} €</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToInquiry(product);
                }}
                className="btn-primary flex-1 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Dodaj v povpraševanje
              </button>
              <button
                onClick={() => onProductClick(product)}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Eye className="w-5 h-5" />
                Podrobnosti
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={() => onProductClick(product)}
    >
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.badges?.map(badge => (
            <span key={badge} className="px-2 py-1 bg-brand-red text-white text-xs font-bold rounded shadow-md">
              {badge}
            </span>
          ))}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-slate-50"
        >
          <Heart className="w-5 h-5 text-slate-600" />
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-2">
            {product.colors?.slice(0, 5).map((color, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                style={{ backgroundColor: color }}
              />
            ))}
            {product.colors?.length > 5 && (
              <div className="w-6 h-6 rounded-full bg-white/80 flex items-center justify-center text-xs font-bold">
                +{product.colors.length - 5}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-4">
        <p className="text-xs text-slate-500 mb-1">ŠIFRA: {product.sku}</p>
        <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-2xl font-bold text-brand-red">{product.price.toFixed(2)} €</span>
          <span className="text-xs text-slate-500">+ DDV</span>
        </div>
        <p className="text-xs text-slate-600 mb-3">z DDV: {product.priceWithVat.toFixed(2)} €</p>

        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToInquiry(product);
            }}
            className="flex-1 bg-brand-red hover:bg-red-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm font-medium"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Dodaj</span>
          </button>
          <button
            onClick={() => onProductClick(product)}
            className="px-3 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-3 pt-3 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            {product.stock}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
