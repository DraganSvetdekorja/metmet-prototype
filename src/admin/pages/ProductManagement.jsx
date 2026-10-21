import { useState } from 'react';
import { Search, Filter, Plus, Edit, Trash2, Eye, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStock, setFilterStock] = useState('all');

  // Mock products data
  const [products] = useState([
    {
      id: '1',
      sku: '06306',
      name: 'Kapa 5 delna sendvič',
      price: '1.83€',
      category: 'Tekstil',
      stock: 'In Stock',
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=100',
      updated: '2025-01-20'
    },
    {
      id: '2',
      sku: 'SO11386',
      name: 'Ženska majica SOL\'S MISS',
      price: '2.81€',
      category: 'Tekstil',
      stock: 'In Stock',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100',
      updated: '2025-01-19'
    },
    {
      id: '3',
      sku: '00512',
      name: 'Bombažna vrečka',
      price: '1.22€',
      category: 'Vrečke',
      stock: 'In Stock',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=100',
      updated: '2025-01-18'
    },
    {
      id: '4',
      sku: 'MO7243',
      name: 'ALUCOLOR - Pisalo',
      price: '2.40€',
      category: 'Pisala',
      stock: 'Low Stock',
      image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=100',
      updated: '2025-01-17'
    },
    {
      id: '5',
      sku: 'GI5000',
      name: 'Moška majica Gildan HEAVY COTTON',
      price: '2.75€',
      category: 'Tekstil',
      stock: 'Out of Stock',
      image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=100',
      updated: '2025-01-16'
    },
  ]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
    const matchesStock = filterStock === 'all' ||
                        (filterStock === 'in-stock' && product.stock === 'In Stock') ||
                        (filterStock === 'low-stock' && product.stock === 'Low Stock') ||
                        (filterStock === 'out-of-stock' && product.stock === 'Out of Stock');

    return matchesSearch && matchesCategory && matchesStock;
  });

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this product?')) {
      console.log('Deleting product:', id);
    }
  };

  const getStockBadgeColor = (stock) => {
    switch (stock) {
      case 'In Stock':
        return 'bg-green-100 text-green-700';
      case 'Low Stock':
        return 'bg-yellow-100 text-yellow-700';
      case 'Out of Stock':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Product Management</h1>
          <p className="text-slate-600 mt-1">{filteredProducts.length} products found</p>
        </div>
        <Link to="/admin/products/new" className="btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Add Product
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name or SKU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
            />
          </div>

          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
          >
            <option value="all">All Categories</option>
            <option value="Tekstil">Tekstil</option>
            <option value="Vrečke">Vrečke</option>
            <option value="Pisala">Pisala</option>
          </select>

          <select
            value={filterStock}
            onChange={(e) => setFilterStock(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
          >
            <option value="all">All Stock Status</option>
            <option value="in-stock">In Stock</option>
            <option value="low-stock">Low Stock</option>
            <option value="out-of-stock">Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-slate-700">Product</th>
                <th className="text-left py-3 px-4 font-medium text-slate-700">SKU</th>
                <th className="text-left py-3 px-4 font-medium text-slate-700">Category</th>
                <th className="text-left py-3 px-4 font-medium text-slate-700">Price</th>
                <th className="text-left py-3 px-4 font-medium text-slate-700">Stock</th>
                <th className="text-left py-3 px-4 font-medium text-slate-700">Updated</th>
                <th className="text-right py-3 px-4 font-medium text-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-medium text-slate-900">{product.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm font-mono text-slate-600">{product.sku}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-slate-600">{product.category}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-medium text-slate-900">{product.price}</span>
                    <span className="text-xs text-slate-500 ml-1">+ DDV</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStockBadgeColor(product.stock)}`}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-slate-600">{product.updated}</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        to={`/p/${product.sku}`}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        title="View"
                      >
                        <Eye className="w-4 h-4 text-slate-600" />
                      </Link>
                      <button
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4 text-slate-600" />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-600">No products found</p>
            <p className="text-sm text-slate-500 mt-1">Try adjusting your filters</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredProducts.length > 0 && (
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-slate-600">
            Showing 1 to {filteredProducts.length} of {products.length} products
          </p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 bg-brand-red text-white rounded-lg hover:bg-red-700 transition-colors">
              1
            </button>
            <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
              2
            </button>
            <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
