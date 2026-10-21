# Me&Met B2B E-commerce Prototype

Modern, professional B2B e-commerce prototype for Me&Met - Slovenia's leading promotional and business gifts supplier.

🚀 **Live Demo**: [https://metmet-prototype.vercel.app/](https://metmet-prototype.vercel.app/)

---

## 📸 Screenshots & Visual Documentation

For detailed visual documentation with annotated screenshots, see **[docs/SCREENSHOTS.md](docs/SCREENSHOTS.md)**

### Quick Preview

**Homepage** - [View Live](https://metmet-prototype.vercel.app/)
- ✅ Hero section with gradient background
- ✅ Featured services icons (UV Tisk, Vezenje, B2B cene)
- ✅ Category grid with 8 featured categories
- ✅ Product carousel with badges

**Category Page** - [/c/tekstil](https://metmet-prototype.vercel.app/c/tekstil)
- ✅ Filter sidebar (Price, Color, Branding technique)
- ✅ Grid/List view toggle
- ✅ Product cards with quick actions

**Product Detail** - [/p/06306](https://metmet-prototype.vercel.app/p/06306)
- ✅ Image gallery with color variants
- ✅ **B2B Bulk Pricing Tiers** (50+, 100+, 500+ pieces)
- ✅ Customization selector (UV Tisk, Vezenje, Sitotisk)
- ✅ Quantity calculator with live total pricing
- ✅ Trust badges (Fast delivery, Quality guarantee)

---

## 🌐 URL Routing

The app uses **React Router** for proper URL-based navigation:

| Route | Description | Example |
|-------|-------------|---------|
| `/` | Homepage | [metmet-prototype.vercel.app/](https://metmet-prototype.vercel.app/) |
| `/c/:categorySlug` | Category pages | [/c/vrecke-mosnicki](https://metmet-prototype.vercel.app/c/vrecke-mosnicki) |
| `/p/:productSku` | Product detail | [/p/06306](https://metmet-prototype.vercel.app/p/06306) |

✅ URLs are shareable  
✅ Browser back/forward works  
✅ Refresh on any page works  
✅ SEO-friendly structure  

---

## 🚀 Features

- **Modern UI/UX**: Clean, professional interface optimized for B2B workflows
- **URL-Based Routing**: Shareable links for every category and product
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile
- **Product Catalog**: Dynamic product grid with filtering and search
- **B2B Features**:
  - Bulk pricing tiers
  - Inquiry cart system ("Pošlji povpraševanje")
  - Customization options (UV Print, Embroidery, Engraving)
  - VAT price display
- **Product Details**: Comprehensive product pages with specifications and bulk pricing
- **Category Navigation**: 17 business categories with mega-menu
- **Animations**: Smooth Framer Motion animations throughout

## 🛠️ Tech Stack

- **React 18** - Modern React with Hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Lucide React** - Beautiful, consistent icon set

## 📦 Installation

```bash
# Navigate to project directory
cd metmet-prototype

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

### Colors
- **Brand Red**: `#DC2626` - Primary CTA, highlights
- **Brand Navy**: `#1E3A8A` - Secondary branding
- **Brand Slate**: `#1E293B` - Dark backgrounds, text

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold 600-700 weight
- Body: Regular 400 weight

## 📁 Project Structure

```
metmet-prototype/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Top navigation and mega-menu
│   │   ├── Hero.jsx            # Homepage hero section
│   │   ├── FeaturedServices.jsx # Service highlights
│   │   ├── CategoryGrid.jsx    # Category cards
│   │   ├── ProductGrid.jsx     # Product listing with filters
│   │   ├── ProductCard.jsx     # Individual product card
│   │   ├── ProductDetail.jsx   # Product detail page
│   │   ├── BrandLogos.jsx      # Partner brand logos
│   │   └── Footer.jsx          # Footer with links
│   ├── data/
│   │   └── mockData.js         # Mock products and categories
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🔄 Converting to WordPress/WooCommerce

This prototype is designed to be easily adapted into a WordPress/WooCommerce theme:

### Components → PHP Templates
- `Header.jsx` → `header.php`
- `Footer.jsx` → `footer.php`
- `ProductCard.jsx` → `content-product.php`
- `ProductDetail.jsx` → `single-product.php`
- `CategoryGrid.jsx` → `archive-product.php`

### Data Integration
- Replace mock data with WooCommerce loops
- Use `wp_query` for product filtering
- Implement WooCommerce hooks for cart/checkout
- Add custom fields for bulk pricing and customization options

### Styling
- Copy Tailwind classes to theme
- Or use Tailwind with WordPress (with PostCSS build)
- Maintain component structure for consistency

## 🎯 Key B2B Features to Implement

1. **User Roles & Pricing**
   - Wholesale customer accounts
   - Custom pricing per customer tier
   - Hide prices for non-logged-in users

2. **Quote/Inquiry System**
   - Convert cart to quote request
   - Admin quote management
   - Email notifications

3. **Bulk Order Management**
   - Minimum order quantities
   - Volume discounts
   - Quick order forms

4. **Customization Workflow**
   - File upload for logos
   - Artwork approval process
   - Customization pricing calculator

## 📝 License

© 2018-2025 Me&Met d.o.o. All rights reserved.

## 🤝 Support

For questions or support, contact:
- Email: info@met-met.si
- Phone: +386 1 234 5678
- Website: https://met-met.si
