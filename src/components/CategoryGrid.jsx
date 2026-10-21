import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CategoryGrid = ({ categories, onCategoryClick }) => {
  const featuredCategories = categories.slice(0, 8);

  return (
    <section className="py-16 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kategorije izdelkov</h2>
          <p className="text-slate-600 text-lg">
            Odkrijte našo široko paleto poslovnih in promocijskih daril
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => onCategoryClick(category)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-bold text-lg mb-2 group-hover:text-brand-red transition-colors">
                  {category.name}
                </h3>
                <div className="flex items-center gap-2 text-sm opacity-90 group-hover:opacity-100">
                  <span>Oglej izdelke</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {category.featured && (
                <div className="absolute top-4 right-4 bg-brand-red text-white px-3 py-1 rounded-full text-xs font-bold">
                  UV TISK
                </div>
              )}
            </motion.button>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary inline-flex items-center gap-2 group">
            Vse kategorije
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
