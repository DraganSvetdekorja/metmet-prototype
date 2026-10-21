export const categories = [
  { id: 1, name: 'Personalizirana darila – Darila po meri', slug: 'personalizirana-darila', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600' },
  { id: 2, name: 'Vrečke in mošnjički', slug: 'vrecke-mosnicki', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600' },
  { id: 3, name: 'Tekstil', slug: 'tekstil', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600' },
  { id: 4, name: 'Izdelki za sublimacijo', slug: 'sublimacija', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600' },
  { id: 5, name: 'Svinčniki, kemični svinčniki in barvice', slug: 'pisala', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600' },
  { id: 6, name: 'Pisarna', slug: 'pisarna', image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=600' },
  { id: 7, name: 'Nahrbtniki in torbe', slug: 'nahrbtniki-torbe', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600' },
  { id: 8, name: 'USB in tehnologija', slug: 'tehnologija', image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600' },
  { id: 9, name: 'Dežniki in izdelki za dež', slug: 'dezniki', image: 'https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?w=600' },
  { id: 10, name: 'Dom, hrana in pijača', slug: 'dom-hrana', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600' },
  { id: 11, name: 'Embalaža – darilne škatlice', slug: 'embalaza', image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=600' },
  { id: 12, name: 'Drobni izdelki', slug: 'drobni-izdelki', image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600' },
  { id: 13, name: 'Izdelki za otroke', slug: 'otroci', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600' },
  { id: 14, name: 'Prazniki', slug: 'prazniki', image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=600' },
  { id: 15, name: 'Nakit Tagua iz semen palme', slug: 'nakit-tagua', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600' },
  { id: 16, name: 'Drobni unikatni izdelki', slug: 'unikatni', image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=600' },
  { id: 17, name: 'UV TISK', slug: 'uv-tisk', image: 'https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=600', featured: true }
];

export const products = [
  {
    id: 'P001',
    sku: '06306',
    name: 'Kapa 5 delna sendvič',
    category: 'tekstil',
    price: 1.83,
    priceWithVat: 2.23,
    currency: 'EUR',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600',
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600',
      'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=600'
    ],
    colors: ['red', 'white', 'black', 'navy', 'green'],
    description: 'Bombažna kapa s 5-delna nastavljiva velikost kovinska zaponka',
    specifications: {
      material: '100% bombaž',
      gramatura: '150 g/m²',
      sizes: ['Univerzalna']
    },
    customization: ['UV Tisk', 'Sitotisk', 'Vezenje'],
    badges: ['TOP B2B', 'Hitra dostava'],
    stock: 'Na zalogi',
    bulkPricing: [
      { qty: 50, price: 1.65, priceWithVat: 2.01 },
      { qty: 100, price: 1.50, priceWithVat: 1.83 },
      { qty: 500, price: 1.35, priceWithVat: 1.65 }
    ]
  },
  {
    id: 'P002',
    sku: 'SO11386',
    name: 'Ženska majica SOL\'S MISS',
    category: 'tekstil',
    price: 2.81,
    priceWithVat: 3.43,
    currency: 'EUR',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600'
    ],
    colors: ['lime', 'white', 'pink', 'navy', 'red'],
    description: 'Deko časno 100% bombaž 150 g/m² gramatura 150 g/m² išča barva 85% bombaž in 15% viskoza',
    specifications: {
      material: '100% bombaž',
      gramatura: '150 g/m²',
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    customization: ['UV Tisk', 'Sitotisk', 'DTG Print'],
    badges: ['EKO', 'SOL\'S'],
    stock: 'Na zalogi',
    bulkPricing: [
      { qty: 50, price: 2.60, priceWithVat: 3.17 },
      { qty: 100, price: 2.40, priceWithVat: 2.93 },
      { qty: 500, price: 2.10, priceWithVat: 2.56 }
    ]
  },
  {
    id: 'P003',
    sku: '00512',
    name: 'Bombažna vrečka',
    category: 'vrecke-mosnicki',
    price: 1.22,
    priceWithVat: 1.49,
    currency: 'EUR',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600',
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600',
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600'
    ],
    colors: ['beige', 'black', 'red'],
    description: 'Naravna bombažna vrečka dolge ročaje primerna za sitotisk in UV tisk',
    specifications: {
      material: '100% bombaž NATUR',
      dimensions: '38 x 42 cm',
      handleLength: '70 cm'
    },
    customization: ['UV Tisk', 'Sitotisk'],
    badges: ['EKO', 'NATUR'],
    stock: 'Na zalogi',
    bulkPricing: [
      { qty: 100, price: 1.10, priceWithVat: 1.34 },
      { qty: 250, price: 1.00, priceWithVat: 1.22 },
      { qty: 500, price: 0.85, priceWithVat: 1.04 }
    ]
  },
  {
    id: 'P004',
    sku: 'MO6829',
    name: 'Bambažna brisača',
    category: 'dom-hrana',
    price: 4.80,
    priceWithVat: 5.86,
    currency: 'EUR',
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600',
    images: [
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600'
    ],
    colors: ['beige', 'white', 'grey'],
    description: 'Visokokakovostna bombažna brisača 500g/m² mehka in vpojn',
    specifications: {
      material: '100% bombaž',
      gramatura: '500 g/m²',
      dimensions: '70 x 140 cm'
    },
    customization: ['Vezenje', 'UV Tisk'],
    badges: ['PREMIUM'],
    stock: 'Na zalogi',
    bulkPricing: [
      { qty: 25, price: 4.50, priceWithVat: 5.49 },
      { qty: 50, price: 4.20, priceWithVat: 5.12 },
      { qty: 100, price: 3.90, priceWithVat: 4.76 }
    ]
  },
  {
    id: 'P005',
    sku: 'MO7243',
    name: 'ALUCOLOR - Pisalo',
    category: 'pisala',
    price: 2.40,
    priceWithVat: 2.93,
    currency: 'EUR',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600',
    images: [
      'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600'
    ],
    colors: ['blue', 'red', 'black', 'silver', 'green'],
    description: 'Aluminijasto kemično pero z modrim črnilom eleganten dizajn',
    specifications: {
      material: 'Aluminij',
      inkColor: 'Modra',
      mechanism: 'Push button'
    },
    customization: ['Graviranje', 'UV Tisk', 'Tampontisk'],
    badges: ['TOP SELLER'],
    stock: 'Na zalogi',
    bulkPricing: [
      { qty: 100, price: 2.20, priceWithVat: 2.68 },
      { qty: 250, price: 2.00, priceWithVat: 2.44 },
      { qty: 500, price: 1.80, priceWithVat: 2.20 }
    ]
  },
  {
    id: 'P006',
    sku: 'MO8829',
    name: 'RAKET - Set za badminton',
    category: 'drobni-izdelki',
    price: 7.40,
    priceWithVat: 9.03,
    currency: 'EUR',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600',
    images: [
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600'
    ],
    colors: ['red', 'blue', 'yellow'],
    description: 'Komplet za badminton z 2 loparjema in žogico v bombažni vrečki',
    specifications: {
      material: 'Aluminij + Najlon',
      package: 'Bombažna vrečka'
    },
    customization: ['Sitotisk na vrečki', 'UV Tisk'],
    badges: ['SPORT', 'SET'],
    stock: 'Na zalogi',
    bulkPricing: [
      { qty: 25, price: 7.00, priceWithVat: 8.54 },
      { qty: 50, price: 6.60, priceWithVat: 8.05 },
      { qty: 100, price: 6.20, priceWithVat: 7.56 }
    ]
  },
  {
    id: 'P007',
    sku: 'GI5000',
    name: 'Moška majica Gildan HEAVY COTTON',
    category: 'tekstil',
    price: 2.75,
    priceWithVat: 3.36,
    currency: 'EUR',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600',
    images: [
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600'
    ],
    colors: ['red', 'white', 'black', 'navy', 'grey', 'green'],
    description: 'Težka bombažna majica 185 g/m² visokokakovostno tkan material',
    specifications: {
      material: '100% bombaž',
      gramatura: '185 g/m²',
      sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL']
    },
    customization: ['UV Tisk', 'Sitotisk', 'DTG Print', 'Flex/Flock'],
    badges: ['GILDAN', 'TOP B2B'],
    stock: 'Na zalogi',
    bulkPricing: [
      { qty: 50, price: 2.50, priceWithVat: 3.05 },
      { qty: 100, price: 2.30, priceWithVat: 2.81 },
      { qty: 500, price: 2.00, priceWithVat: 2.44 }
    ]
  },
  {
    id: 'P008',
    sku: '17305',
    name: 'Kapa 6 delna',
    category: 'tekstil',
    price: 1.83,
    priceWithVat: 2.23,
    currency: 'EUR',
    image: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=600',
    images: [
      'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=600'
    ],
    colors: ['red', 'white', 'black', 'navy'],
    description: 'Klasična 6-delna kapa z nastavljivim pasom',
    specifications: {
      material: '100% bombaž',
      gramatura: '280 g/m²',
      sizes: ['Univerzalna']
    },
    customization: ['UV Tisk', 'Vezenje'],
    badges: ['CLASSIC'],
    stock: 'Na zalogi',
    bulkPricing: [
      { qty: 50, price: 1.65, priceWithVat: 2.01 },
      { qty: 100, price: 1.50, priceWithVat: 1.83 },
      { qty: 500, price: 1.35, priceWithVat: 1.65 }
    ]
  }
];

export const brandLogos = [
  { name: 'Gildan', image: 'https://via.placeholder.com/150x60/ffffff/1E293B?text=GILDAN' },
  { name: 'Fruit of the Loom', image: 'https://via.placeholder.com/150x60/ffffff/DC2626?text=FRUIT+OF+THE+LOOM' },
  { name: 'SOL\'S', image: 'https://via.placeholder.com/150x60/ffffff/1E3A8A?text=SOL%27S' },
  { name: 'Result', image: 'https://via.placeholder.com/150x60/ffffff/059669?text=RESULT' },
  { name: 'Kariban', image: 'https://via.placeholder.com/150x60/ffffff/7C3AED?text=KARIBAN' },
  { name: 'Printwear', image: 'https://via.placeholder.com/150x60/ffffff/EA580C?text=PRINTWEAR' }
];

export const featuredServices = [
  {
    icon: 'Printer',
    title: 'UV Tisk',
    description: 'Visokokakovostni UV tisk na različne materiale'
  },
  {
    icon: 'Scissors',
    title: 'Vezenje',
    description: 'Natančno vezenje logotipov in napisov'
  },
  {
    icon: 'Zap',
    title: 'Hitra dostava',
    description: 'Hitro procesiranje naročil in dostava'
  },
  {
    icon: 'Award',
    title: 'B2B cene',
    description: 'Konkurenčne cene za večja naročila'
  }
];
