const ReturnPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Return Policy</h1>

      <p className="text-gray-700 mb-4">
        We offer a 30-day money-back guarantee.
      </p>

      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Return request within 30 days</li>
        <li>Product must be unused</li>
        <li>Refund processed in 5–7 working days</li>
      </ul>
    </div>
  );
};

export default ReturnPolicy;
