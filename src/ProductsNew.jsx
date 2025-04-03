export function ProductsNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onCreate(params, successCallback);
  };
  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-teal-50 via-lime-100 to-green-50 rounded-lg shadow-xl">
      <h1 className="text-4xl font-bold text-center text-teal-600 mb-8">New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-teal-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full p-3 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            required
          />
        </div>

        {/* Price Input */}
        <div>
          <label htmlFor="price" className="block text-lg font-medium text-teal-700">
            Price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            className="w-full p-3 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            required
          />
        </div>

        {/* Description Input */}
        <div>
          <label htmlFor="description" className="block text-lg font-medium text-teal-700">
            Description
          </label>
          <input
            id="description"
            name="description"
            type="text"
            className="w-full p-3 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            required
          />
        </div>

        {/* Supplier Id Input */}
        <div>
          <label htmlFor="supplier_id" className="block text-lg font-medium text-teal-700">
            Supplier ID
          </label>
          <input
            id="supplier_id"
            name="supplier_id"
            type="text"
            className="w-full p-3 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-teal-500 to-lime-500 text-white font-semibold rounded-md hover:from-teal-600 hover:to-lime-600 transition-all"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
