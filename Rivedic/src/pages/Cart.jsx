import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const Cart = () => {
  const { items, removeItem, updateQuantity, total } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <ShoppingBag className="w-24 h-24 mx-auto text-gray-300 mb-6" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Your cart is empty
        </h2>
        <p className="text-gray-600 mb-8">
          Add some products to get started!
        </p>
        <Link
          to="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      {items.map(item => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-4"
        >
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p>₹{item.price}</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                updateQuantity(item.id, Math.max(1, item.quantity - 1))
              }
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() =>
                updateQuantity(item.id, item.quantity + 1)
              }
            >
              +
            </button>

            <button onClick={() => removeItem(item.id)}>
              <Trash2 />
            </button>
          </div>
        </div>
      ))}

      <div className="text-right mt-6 text-xl font-bold">
        Total: ₹{total()}
      </div>
    </div>
  );
};

export default Cart;
