export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 via-pink-200 to-purple-300 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 shadow-lg">Welcome to the Enchanted Garden</h1>
      <p className="text-xl text-gray-800 mb-8 max-w-2xl px-4">
        Step into a world of magic, where the flowers bloom and the fairies dance. Explore our mystical garden and find
        your peace.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl text-green-600 font-semibold mb-4">Fairy Path</h2>
          <p className="text-gray-600">Follow the winding paths and let the fairies lead the way.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl text-pink-600 font-semibold mb-4">Blooming Flowers</h2>
          <p className="text-gray-600">Discover the magic of flowers that bloom in every season.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl text-purple-600 font-semibold mb-4">Secret Garden</h2>
          <p className="text-gray-600">Unlock the secrets hidden in our mystical garden.</p>
        </div>
      </div>
    </div>
  );
}
