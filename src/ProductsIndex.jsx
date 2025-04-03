import { Link } from "react-router-dom";

export function ProductsIndex({ products }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center text-teal-600 mb-6">All products ({products.length} total)</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-green-200 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Section */}
            <img
              src={product.primary_image_url}
              alt={product.name}
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-4">
              {/* Product Name */}
              <h2 className="text-xl font-bold text-teal-700 mb-2">{product.name}</h2>
              {/* Product Description */}
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              {/* Product Price */}
              <p className="text-lg font-semibold text-green-600">{`$${product.price}`}</p>
              <Link className="rounded border border-gray-300 p-2 hover:bg-gray-100" to={`/products/${product.id}`}>
                More info
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
