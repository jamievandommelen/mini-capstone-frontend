import { Link } from "react-router-dom";

export function ProductsShow({ product }) {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-green-50 shadow-lg rounded-xl border border-green-200">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-green-700 mb-4 text-center">✨ Product Details ✨</h1>

      {/* Product Image */}
      <div className="flex justify-center mb-6">
        <img
          src={product.primary_image_url}
          alt={product.name}
          className="w-64 h-64 object-cover rounded-lg shadow-md border-4 border-green-300"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-3 text-center">
        <p className="text-xl font-semibold text-green-900">
          🌿 Name: <span className="text-green-700">{product.name}</span>
        </p>
        <p className="text-lg text-green-800">
          📜 Description: <span className="italic">{product.description}</span>
        </p>
        <p className="text-lg text-green-800">
          💰 Price: <span className="font-bold">${product.price}</span>
        </p>
      </div>

      {/* Back Button */}
      <div className="mt-6 flex justify-center">
        <Link
          to="/"
          className="px-5 py-2 text-white bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          ⬅️ Back to all products
        </Link>
      </div>
    </div>
  );
}
