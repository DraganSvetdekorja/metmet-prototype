# 🌐 URL Routing Guide

## Routes Structure

The Me&Met prototype now uses **React Router** for proper URL-based navigation.

### Available Routes

| Route Pattern | Description | Example URL |
|---------------|-------------|-------------|
| `/` | Homepage | https://metmet-prototype.vercel.app/ |
| `/c/:categorySlug` | Category page | https://metmet-prototype.vercel.app/c/vrecke-mosnicki |
| `/p/:productSku` | Product detail | https://metmet-prototype.vercel.app/p/06306 |
| `*` | 404 Not Found | Any invalid URL |

---

## All Category URLs

Based on the mock data, here are all available category routes:

1. `/c/personalizirana-darila` - Personalizirana darila – Darila po meri
2. `/c/vrecke-mosnicki` - Vrečke in mošnjički
3. `/c/tekstil` - Tekstil
4. `/c/sublimacija` - Izdelki za sublimacijo
5. `/c/pisala` - Svinčniki, kemični svinčniki in barvice
6. `/c/pisarna` - Pisarna
7. `/c/nahrbtniki-torbe` - Nahrbtniki in torbe
8. `/c/tehnologija` - USB in tehnologija
9. `/c/dezniki` - Dežniki in izdelki za dež
10. `/c/dom-hrana` - Dom, hrana in pijača
11. `/c/embalaza` - Embalaža – darilne škatlice
12. `/c/drobni-izdelki` - Drobni izdelki
13. `/c/otroci` - Izdelki za otroke
14. `/c/prazniki` - Prazniki
15. `/c/nakit-tagua` - Nakit Tagua iz semen palme
16. `/c/unikatni` - Drobni unikatni izdelki
17. `/c/uv-tisk` - UV TISK ⭐

---

## All Product URLs

Based on the mock data, here are all available product routes:

1. `/p/06306` - Kapa 5 delna sendvič
2. `/p/SO11386` - Ženska majica SOL'S MISS
3. `/p/00512` - Bombažna vrečka
4. `/p/MO6829` - Bambažna brisača
5. `/p/MO7243` - ALUCOLOR - Pisalo
6. `/p/MO8829` - RAKET - Set za badminton
7. `/p/GI5000` - Moška majica Gildan HEAVY COTTON
8. `/p/17305` - Kapa 6 delna

---

## Features

✅ **Shareable URLs** - Copy and share any page URL  
✅ **Browser Navigation** - Back/forward buttons work correctly  
✅ **Refresh Support** - Reload any page without 404 errors  
✅ **SEO-Friendly** - Clean, readable URLs  
✅ **Breadcrumb Navigation** - Back buttons navigate to correct parent pages  

---

## Technical Implementation

### React Router v6
```javascript
// Main routes in App.jsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/c/:categorySlug" element={<CategoryPage />} />
  <Route path="/p/:productSku" element={<ProductPage />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Vercel Configuration
```json
// vercel.json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures all routes work correctly on Vercel deployment.

---

## Navigation Methods

### Programmatic Navigation
```javascript
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/c/tekstil'); // Navigate to category
navigate('/p/06306');   // Navigate to product
navigate('/');          // Navigate to homepage
```

### Link Components
```javascript
import { Link } from 'react-router-dom';

<Link to="/c/tekstil">Tekstil</Link>
<Link to="/p/06306">View Product</Link>
```

---

## Testing Routes

### Local Development
```bash
npm run dev
# Visit:
# http://localhost:3000/
# http://localhost:3000/c/vrecke-mosnicki
# http://localhost:3000/p/06306
```

### Production
Visit any route on the live site:
- https://metmet-prototype.vercel.app/
- https://metmet-prototype.vercel.app/c/tekstil
- https://metmet-prototype.vercel.app/p/SO11386

---

## 404 Handling

Invalid routes show a custom 404 page with a "Back to Home" button:
- `/invalid-url` → 404 page
- `/c/non-existent` → 404 page
- `/p/invalid-sku` → 404 page

---

## Future Enhancements

Potential improvements for the routing system:

1. **Query Parameters** - Add filters to URLs (`/c/tekstil?color=red&size=M`)
2. **Pagination** - Add page numbers (`/c/tekstil?page=2`)
3. **Search Results** - Dedicated search page (`/search?q=kapa`)
4. **Account Pages** - User profile routes (`/account`, `/orders`)
5. **Checkout Flow** - Multi-step checkout (`/checkout/cart`, `/checkout/payment`)

---

## Deployment Notes

✅ Pushed to GitHub: `main` branch  
✅ Vercel auto-deployment enabled  
✅ Client-side routing configured via `vercel.json`  
✅ Build successful (Vite production build)  

The live site at https://metmet-prototype.vercel.app/ will update automatically with these routing changes.
