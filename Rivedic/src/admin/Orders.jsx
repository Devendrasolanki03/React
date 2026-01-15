import { Eye } from "lucide-react";

const Orders = () => {
  const orders = [
    {
      id: "ORD1001",
      customer: "Rahul Sharma",
      payment: "COD",
      status: "Delivered",
      amount: 1999,
    },
    {
      id: "ORD1002",
      customer: "Amit Verma",
      payment: "Prepaid",
      status: "Pending",
      amount: 3998,
    },
    {
      id: "ORD1003",
      customer: "Neha Singh",
      payment: "COD",
      status: "RTO",
      amount: 1999,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Payment</th>
              <th className="p-4">Status</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t">
                <td className="p-4 font-medium">{o.id}</td>
                <td className="p-4">{o.customer}</td>
                <td className="p-4">{o.payment}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      o.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : o.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {o.status}
                  </span>
                </td>
                <td className="p-4 font-semibold">₹{o.amount}</td>
                <td className="p-4">
                  <button className="text-green-600 hover:text-green-800">
                    <Eye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
