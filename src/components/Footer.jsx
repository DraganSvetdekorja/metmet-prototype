import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = ({ categories }) => {
  const quickLinks = categories.slice(0, 6);

  return (
    <footer className="bg-brand-slate text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-brand-red">Me</span>
              <span className="text-white">&Met</span>
            </div>
            <p className="text-slate-300 mb-4 text-sm leading-relaxed">
              Vaš zanesljiv partner za poslovna in promocijska darila. UV tisk, vezenje, gravura in širok izbor izdelkov.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Kategorije</h3>
            <ul className="space-y-2">
              {quickLinks.map((category) => (
                <li key={category.id}>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Informacije</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">O nas</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Pogoji poslovanja</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Politika zasebnosti</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Pogosta vprašanja</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Tehnika tiska</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-300">Telefon</p>
                  <a href="tel:+38612345678" className="hover:text-brand-red transition-colors">
                    +386 1 234 5678
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-300">E-pošta</p>
                  <a href="mailto:info@met-met.si" className="hover:text-brand-red transition-colors">
                    info@met-met.si
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-300">Naslov</p>
                  <p className="text-sm">Poslovna ulica 123<br />1000 Ljubljana, Slovenija</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>&copy; 2018 - {new Date().getFullYear()} Me&Met d.o.o. | Vse pravice pridržane.</p>
            <p>
              Razvila ekipa{' '}
              <a href="#" className="text-white hover:text-brand-red transition-colors">
                Me&Met
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
