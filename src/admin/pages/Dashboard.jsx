import { Package, FolderTree, Upload, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const StatCard = ({ title, value, icon: Icon, color, link }) => (
  <Link
    to={link}
    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-slate-600 mb-1">{title}</p>
        <p className="text-3xl font-bold">{value}</p>
      </div>
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
  </Link>
);

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Products',
      value: '1,234',
      icon: Package,
      color: 'bg-blue-500',
      link: '/admin/products'
    },
    {
      title: 'Categories',
      value: '17',
      icon: FolderTree,
      color: 'bg-green-500',
      link: '/admin/categories'
    },
    {
      title: 'Recent Imports',
      value: '3',
      icon: Upload,
      color: 'bg-purple-500',
      link: '/admin/import'
    },
    {
      title: 'Stock Status',
      value: '95%',
      icon: TrendingUp,
      color: 'bg-orange-500',
      link: '/admin/products'
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-600 mt-1">Welcome to Me&Met Admin Panel</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link
              to="/admin/import"
              className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <Upload className="w-5 h-5 text-brand-red" />
              <div>
                <p className="font-medium">Import Products</p>
                <p className="text-sm text-slate-600">Upload CSV file</p>
              </div>
            </Link>
            <Link
              to="/admin/products/new"
              className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <Package className="w-5 h-5 text-brand-red" />
              <div>
                <p className="font-medium">Add New Product</p>
                <p className="text-sm text-slate-600">Create manually</p>
              </div>
            </Link>
            <Link
              to="/admin/categories"
              className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <FolderTree className="w-5 h-5 text-brand-red" />
              <div>
                <p className="font-medium">Manage Categories</p>
                <p className="text-sm text-slate-600">Organize hierarchy</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium">CSV Imported</p>
                <p className="text-xs text-slate-600">250 products added - 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium">Category Updated</p>
                <p className="text-xs text-slate-600">Tekstil hierarchy changed - 5 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium">Product Edited</p>
                <p className="text-xs text-slate-600">Kapa 5 delna updated - 1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
