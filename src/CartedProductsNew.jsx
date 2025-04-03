export function CartedProductsNew({ product, onCartCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onCartCreate();
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-green-50 shadow-lg rounded-xl border border-green-200">
      {/* Title */}
      <h1 className="text-2xl font-bold text-green-700 mb-4 text-center">🛍️ Enter Quantity & Add to Bag:</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Quantity Input */}
        <div className="flex flex-col items-center">
          <label className="text-lg text-green-900 font-medium" htmlFor="quantity">
            🌸 Quantity:
          </label>
          <input
            name="quantity"
            type="number"
            min="1"
            required
            className="mt-2 w-24 text-center p-2 border-2 border-green-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Hidden Product ID */}
        <input name="product_id" type="hidden" value={product.id} />

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-green-500 text-white font-semibold rounded-full shadow-md transition duration-300 transform hover:scale-105 hover:bg-green-600"
          >
            🍃 Add to Bag
          </button>
        </div>
      </form>
    </div>
  );
}
