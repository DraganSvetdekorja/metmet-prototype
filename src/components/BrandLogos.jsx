import { motion } from 'framer-motion';

const brandLogos = [
  { name: 'Gildan', logo: 'GILDAN' },
  { name: 'Fruit of the Loom', logo: 'FRUIT OF THE LOOM' },
  { name: "SOL'S", logo: "SOL'S" },
  { name: 'Result', logo: 'RESULT' },
  { name: 'Kariban', logo: 'KARIBAN' },
  { name: 'Printwear', logo: 'PRINTWEAR' }
];

const BrandLogos = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="container-custom">
        <h3 className="text-center text-slate-600 text-sm font-medium mb-8 uppercase tracking-wider">
          Zaupajo nam vodilne blagovne znamke
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brandLogos.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="text-slate-400 hover:text-slate-700 transition-colors font-bold text-sm text-center px-4">
                {brand.logo}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
