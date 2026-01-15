import { useState } from "react";
import { User, Package, Settings, LogOut } from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("orders");

  // Sample data - will come from API
  const orders = [
    {
      id: "ORD-1001",
      date: "2026-01-10",
      status: "Delivered",
      total: 1999,
      items: [{ name: "Premium Shilajit Resin - 20g", quantity: 1 }],
    },
    {
      id: "ORD-1002",
      date: "2026-01-05",
      status: "Shipped",
      total: 3998,
      items: [{ name: "Premium Shilajit Resin - 20g", quantity: 2 }],
    },
  ];

  const getStatusColor = (status) => {
    const colors = {
      Delivered: "bg-green-100 text-green-700",
      Shipped: "bg-blue-100 text-blue-700",
      Processing: "bg-yellow-100 text-yellow-700",
      Cancelled: "bg-red-100 text-red-700",
    };
    return colors[status] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">My Account</h1>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-xl font-bold">Rajesh Kumar</h2>
              <p className="text-gray-600 text-sm">rajesh@example.com</p>
            </div>

            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("orders")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  activeTab === "orders"
                    ? "bg-green-50 text-green-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Package className="w-5 h-5" />
                My Orders
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  activeTab === "settings"
                    ? "bg-green-50 text-green-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Settings className="w-5 h-5" />
                Settings
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition">
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {activeTab === "orders" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Order History</h2>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="font-bold text-lg mb-1">
                          Order #{order.id}
                        </div>
                        <div className="text-sm text-gray-600">
                          Placed on {order.date}
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </div>

                    <div className="border-t pt-4">
                      {order.items.map((item, i) => (
                        <div key={i} className="flex justify-between mb-2">
                          <span className="text-gray-700">
                            {item.name} x {item.quantity}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t mt-4 pt-4 flex justify-between items-center">
                      <div className="text-xl font-bold">
                        Total: ₹{order.total}
                      </div>
                      <button className="text-green-600 hover:text-green-700 font-semibold">
                        View Details →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Rajesh"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Kumar"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="rajesh@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      defaultValue="+91 98765 43210"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
