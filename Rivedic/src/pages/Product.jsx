import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Truck, Shield } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const Product = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();

  // Sample product data - will come from API
  const product = {
    id: 1,
    name: 'Premium Himalayan Shilajit Resin - 20g',
    price: 1999,
    description: 'Pure, authentic Shilajit resin sourced from the highest peaks of the Himalayas. Rich in fulvic acid and 85+ trace minerals.',
    features: [
      '100% Pure Himalayan Shilajit',
      '85+ Trace Minerals',
      'High Fulvic Acid Content',
      'Lab Tested & Certified',
      'No Additives or Preservatives',
      'Traditional Processing Methods'
    ],
    benefits: [
      'Boosts energy and stamina',
      'Enhances cognitive function',
      'Supports immune system',
      'Improves physical performance',
      'Promotes healthy aging',
      'Aids in nutrient absorption'
    ]
  };

  const handleAddToCart = () => {
    addItem({ ...product, quantity });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="bg-gradient-to-br from-green-100 to-amber-100 rounded-2xl aspect-square flex items-center justify-center mb-4">
            <div className="text-center p-12">
              <div className="text-9xl mb-4">🏔️</div>
              <div className="text-2xl font-semibold text-gray-700">Shilajit Resin</div>
            </div>
          </div>
          
          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg cursor-pointer hover:ring-2 ring-green-500 transition"></div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-600">(2,456 reviews)</span>
          </div>

          <div className="text-4xl font-bold text-green-700 mb-6">₹{product.price}</div>

          <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Quantity</label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border-2 border-gray-300 rounded-lg font-bold hover:bg-gray-100"
              >
                -
              </button>
              <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border-2 border-gray-300 rounded-lg font-bold hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
            <button className="w-14 h-14 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition">
              <Heart className="w-6 h-6" />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
              <Truck className="w-6 h-6 text-green-600" />
              <div>
                <div className="font-semibold text-sm">Free Shipping</div>
                <div className="text-xs text-gray-600">On all orders</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
              <Shield className="w-6 h-6 text-green-600" />
              <div>
                <div className="font-semibold text-sm">30-Day Guarantee</div>
                <div className="text-xs text-gray-600">Money back</div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xl font-bold mb-4">Health Benefits</h3>
            <ul className="space-y-2">
              {product.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;