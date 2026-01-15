import {
  BarChart3,
  Users,
  ShoppingCart,
  IndianRupee,
  PackageCheck,
  Clock,
  RotateCcw,
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <div className="flex gap-3">
          <Link
            to="/admin/orders"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            View Orders
          </Link>
          <Link
            to="/admin/reports"
            className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            View Reports
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Stat
          title="Total Orders"
          value="1,240"
          icon={<ShoppingCart />}
        />
        <Stat
          title="Total Revenue"
          value="₹12,80,000"
          icon={<IndianRupee />}
        />
        <Stat
          title="COD Orders"
          value="40%"
          icon={<BarChart3 />}
        />
        <Stat
          title="Customers"
          value="820"
          icon={<Users />}
        />
      </div>

      {/* Order Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatusCard
          title="Delivered Orders"
          value="900"
          icon={<PackageCheck />}
          color="green"
        />
        <StatusCard
          title="Pending Orders"
          value="220"
          icon={<Clock />}
          color="yellow"
        />
        <StatusCard
          title="RTO Orders"
          value="120"
          icon={<RotateCcw />}
          color="red"
        />
      </div>
    </div>
  );
};

/* ===================== COMPONENTS ===================== */

const Stat = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
    <div className="p-3 bg-green-100 text-green-600 rounded-full">
      {icon}
    </div>
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

const StatusCard = ({ title, value, icon, color }) => {
  const colorMap = {
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
    red: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
      <div className={`p-3 rounded-full ${colorMap[color]}`}>
        {icon}
      </div>
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
