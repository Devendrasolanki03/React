import { BarChart3, IndianRupee, Truck, RotateCcw } from "lucide-react";

const Reports = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Reports</h1>

      {/* Revenue Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card
          title="Total Revenue"
          value="₹12,80,000"
          icon={<IndianRupee />}
        />
        <Card
          title="COD Orders"
          value="40%"
          icon={<BarChart3 />}
        />
        <Card
          title="Delivered"
          value="900"
          icon={<Truck />}
        />
        <Card
          title="RTO"
          value="120"
          icon={<RotateCcw />}
        />
      </div>

      {/* Revenue Summary */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Revenue Summary</h2>

        <ul className="space-y-2 text-gray-700">
          <li>💰 Total Orders: 1,240</li>
          <li>📦 Delivered Orders: 900</li>
          <li>⏳ Pending Orders: 220</li>
          <li>↩️ RTO Orders: 120</li>
          <li>💳 Prepaid Orders: 60%</li>
          <li>💵 COD Orders: 40%</li>
        </ul>
      </div>
    </div>
  );
};

const Card = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
    <div className="text-green-600">{icon}</div>
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

export default Reports;
