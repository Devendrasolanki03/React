import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

        <nav className="space-y-3">
          <Link
            to="/admin"
            className="block px-3 py-2 rounded hover:bg-gray-800"
          >
            Dashboard
          </Link>

          <Link
            to="/admin/orders"
            className="block px-3 py-2 rounded hover:bg-gray-800"
          >
            Orders
          </Link>

          <Link
            to="/admin/reports"
            className="block px-3 py-2 rounded hover:bg-gray-800"
          >
            Reports
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
