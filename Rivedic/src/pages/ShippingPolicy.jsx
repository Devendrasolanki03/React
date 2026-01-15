const ShippingPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Shipping Policy</h1>

      <p className="text-gray-700 mb-4">
        We ship across India. Orders are processed within 24–48 hours.
      </p>

      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Free shipping on all orders</li>
        <li>Delivery in 3–7 business days</li>
        <li>Tracking details shared via SMS/Email</li>
      </ul>
    </div>
  );
};

export default ShippingPolicy;
