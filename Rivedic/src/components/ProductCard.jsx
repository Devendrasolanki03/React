import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const ProductCard = ({ product }) => {
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Product Image */}
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square bg-gradient-to-br from-green-100 to-amber-100 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-6xl mb-2">🏔️</div>
            <div className="text-sm text-gray-600">Premium Shilajit</div>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-6">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-green-600 transition">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-green-700">₹{product.price}</div>
            <div className="text-sm text-gray-500">Free Shipping</div>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
          >
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>

        {/* Features */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex gap-2 text-xs text-gray-600">
            <span className="bg-green-50 px-2 py-1 rounded">100% Pure</span>
            <span className="bg-amber-50 px-2 py-1 rounded">Lab Tested</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;