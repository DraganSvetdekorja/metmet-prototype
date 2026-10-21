import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Heart, Share2, Check, Package, Truck, Shield } from 'lucide-react';

const ProductDetail = ({ product, onBack, onAddToInquiry }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || null);
  const [quantity, setQuantity] = useState(100);
  const [selectedCustomization, setSelectedCustomization] = useState([]);
  const [activeTab, setActiveTab] = useState('specs');

  const images = product.images || [product.image];

  const getCurrentPrice = () => {
    const tier = [...product.bulkPricing]
      .reverse()
      .find(tier => quantity >= tier.qty);
    return tier || { price: product.price, priceWithVat: product.priceWithVat };
  };

  const currentPrice = getCurrentPrice();

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="container-custom">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-brand-red hover:text-red-700 mb-6 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Nazaj
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Left - Images */}
            <div>
              <div className="aspect-square rounded-lg overflow-hidden bg-slate-100 mb-4">
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-4 gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? 'border-brand-red' : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right - Product Info */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-slate-500 mb-1">ŠIFRA: {product.sku}</p>
                  <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                  <div className="flex gap-2">
                    {product.badges?.map(badge => (
                      <span key={badge} className="px-3 py-1 bg-brand-red text-white text-xs font-bold rounded-full">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                    <Heart className="w-6 h-6 text-slate-600" />
                  </button>
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                    <Share2 className="w-6 h-6 text-slate-600" />
                  </button>
                </div>
              </div>

              <p className="text-slate-700 mb-6 leading-relaxed">{product.description}</p>

              {/* Price */}
              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-brand-red">{currentPrice.price.toFixed(2)} €</span>
                  <span className="text-slate-500">+ DDV</span>
                </div>
                <p className="text-slate-600">z DDV: <span className="font-semibold">{currentPrice.priceWithVat.toFixed(2)} €</span></p>
                <p className="text-sm text-slate-500 mt-2">
                  <Check className="w-4 h-4 inline mr-1" />
                  {product.stock}
                </p>
              </div>

              {/* Bulk Pricing Tiers */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Cenovna lestvica po količini</h3>
                <div className="grid grid-cols-3 gap-3">
                  {product.bulkPricing?.map((tier, idx) => (
                    <div
                      key={idx}
                      className={`p-3 border-2 rounded-lg transition-all cursor-pointer ${
                        quantity >= tier.qty
                          ? 'border-brand-red bg-brand-red/5'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                      onClick={() => setQuantity(tier.qty)}
                    >
                      <p className="text-xs text-slate-600 mb-1">{tier.qty}+ kos</p>
                      <p className="font-bold text-brand-red">{tier.price.toFixed(2)} €</p>
                      <p className="text-xs text-slate-500">+ DDV</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              {product.colors && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Barva</h3>
                  <div className="flex gap-3">
                    {product.colors.map((color, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedColor(color)}
                        className={`w-12 h-12 rounded-full border-2 transition-all ${
                          selectedColor === color
                            ? 'border-brand-red scale-110'
                            : 'border-slate-300 hover:border-slate-400'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Customization Options */}
              {product.customization && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Možnosti personalizacije</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.customization.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSelectedCustomization(prev =>
                            prev.includes(option)
                              ? prev.filter(o => o !== option)
                              : [...prev, option]
                          );
                        }}
                        className={`p-3 border-2 rounded-lg transition-all text-sm font-medium ${
                          selectedCustomization.includes(option)
                            ? 'border-brand-red bg-brand-red text-white'
                            : 'border-slate-300 hover:border-brand-red'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Količina</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 10))}
                    className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-24 px-4 py-2 border border-slate-300 rounded-lg text-center"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 10)}
                    className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50"
                  >
                    +
                  </button>
                  <span className="text-slate-600">kosov</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => onAddToInquiry(product)}
                  className="flex-1 btn-primary flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Dodaj v povpraševanje
                </button>
                <button className="btn-secondary">
                  Kupi zdaj
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                <div className="text-center">
                  <Package className="w-8 h-8 mx-auto mb-2 text-brand-red" />
                  <p className="text-xs font-medium">Hitro procesiranje</p>
                </div>
                <div className="text-center">
                  <Truck className="w-8 h-8 mx-auto mb-2 text-brand-red" />
                  <p className="text-xs font-medium">Dostava 3-5 dni</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-brand-red" />
                  <p className="text-xs font-medium">Garancija kakovosti</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="border-t border-slate-200">
            <div className="container-custom">
              <div className="flex gap-6 border-b border-slate-200">
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`py-4 px-2 font-medium transition-colors relative ${
                    activeTab === 'specs' ? 'text-brand-red' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Tehnične specifikacije
                  {activeTab === 'specs' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('customization')}
                  className={`py-4 px-2 font-medium transition-colors relative ${
                    activeTab === 'customization' ? 'text-brand-red' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Možnosti personalizacije
                  {activeTab === 'customization' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red" />
                  )}
                </button>
              </div>

              <div className="py-8">
                {activeTab === 'specs' && (
                  <div className="max-w-2xl">
                    <table className="w-full">
                      <tbody>
                        {Object.entries(product.specifications || {}).map(([key, value]) => (
                          <tr key={key} className="border-b border-slate-100">
                            <td className="py-3 pr-6 font-medium text-slate-700 capitalize">{key}</td>
                            <td className="py-3 text-slate-600">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 'customization' && (
                  <div className="max-w-2xl space-y-4">
                    {product.customization?.map((option) => (
                      <div key={option} className="p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-semibold mb-2">{option}</h4>
                        <p className="text-sm text-slate-600">
                          Visokokakovostna personalizacija z metodo {option}. Za podrobnosti in cenovno ponudbo nas kontaktirajte.
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
