import { useState } from 'react';
import { Search, ShoppingCart, Phone, Mail, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ cartCount, onLogoClick, categories, onCategoryClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Announcement Bar */}
      <div className="bg-brand-red text-white py-2 text-center text-sm font-medium">
        <p>Hiter in zanesljiv tisk ter gravura za vaša podjetja ⚡</p>
      </div>

      {/* Main Header */}
      <div className="border-b border-slate-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <button
              onClick={onLogoClick}
              className="flex-shrink-0 hover:opacity-80 transition-opacity"
            >
              <div className="text-2xl font-bold">
                <span className="text-brand-red">Me</span>
                <span className="text-brand-navy">&Met</span>
              </div>
              <div className="text-xs text-slate-600 -mt-1">Poslovna darila</div>
            </button>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Išči po šifri izdelka ali kategoriji..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <a href="tel:+38612345678" className="hidden lg:flex items-center gap-2 text-slate-700 hover:text-brand-red transition-colors">
                <Phone className="w-5 h-5" />
                <span className="text-sm font-medium">+386 1 234 5678</span>
              </a>

              <a href="mailto:info@met-met.si" className="hidden lg:flex items-center gap-2 text-slate-700 hover:text-brand-red transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-sm font-medium">info@met-met.si</span>
              </a>

              <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <ShoppingCart className="w-6 h-6 text-slate-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-red text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-brand-slate text-white hidden md:block">
        <div className="container-custom">
          <div className="flex items-center gap-1">
            <button
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
              className="px-4 py-3 hover:bg-slate-700 transition-colors flex items-center gap-2 font-medium"
            >
              <Menu className="w-5 h-5" />
              Vse kategorije
              <ChevronDown className="w-4 h-4" />
            </button>

            <a href="#" className="px-4 py-3 hover:bg-slate-700 transition-colors">Promocijska darila</a>
            <a href="#" className="px-4 py-3 hover:bg-slate-700 transition-colors">Tekstil</a>
            <a href="#" className="px-4 py-3 hover:bg-slate-700 transition-colors">UV Tisk</a>
            <a href="#" className="px-4 py-3 hover:bg-slate-700 transition-colors">E-katalogi</a>
            <a href="#" className="px-4 py-3 hover:bg-slate-700 transition-colors">Kontakt</a>
          </div>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {megaMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
              className="absolute left-0 right-0 bg-white shadow-xl border-t border-slate-200"
            >
              <div className="container-custom py-8">
                <div className="grid grid-cols-4 gap-6">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        onCategoryClick(category);
                        setMegaMenuOpen(false);
                      }}
                      className="text-left p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="text-slate-900 font-medium group-hover:text-brand-red transition-colors">
                        {category.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 bg-white"
          >
            <div className="container-custom py-4">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Išči izdelke..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                />
              </div>
              <div className="space-y-2">
                {categories.slice(0, 8).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      onCategoryClick(category);
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-slate-50 rounded-lg"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
