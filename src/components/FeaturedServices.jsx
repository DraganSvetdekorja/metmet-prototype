import { Printer, Scissors, Zap, Award, PackageCheck, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Printer,
    title: 'UV Tisk',
    description: 'Visokokakovostni UV tisk na različne materiale'
  },
  {
    icon: Scissors,
    title: 'Vezenje',
    description: 'Natančno vezenje logotipov in napisov'
  },
  {
    icon: Zap,
    title: 'Hitra dostava',
    description: 'Procesiranje naročil v 3-5 dni'
  },
  {
    icon: Award,
    title: 'B2B cene',
    description: 'Konkurenčne cene za večja naročila'
  },
  {
    icon: PackageCheck,
    title: 'Velika izbira',
    description: 'Preko 5000 izdelkov v katalogu'
  },
  {
    icon: Leaf,
    title: 'Eko izdelki',
    description: 'Širok izbor ekoloških materialov'
  }
];

const FeaturedServices = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/10 rounded-full mb-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-brand-red group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-snug">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
