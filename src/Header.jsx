import { Link } from "react-router-dom";
export function Header() {
  return (
    <header class="bg-green-600 text-white py-4">
      <div class="max-w-7xl mx-auto flex items-center justify-between px-4">
        <h1 class="text-3xl font-bold">Enchanted Garden</h1>

        <nav>
          <ul class="flex space-x-6">
            <li>
              <a href="#home" class="hover:text-green-300">
                <Link to="/">Home</Link>
              </a>
            </li>
            <li>
              <a href="#singup" class="hover:text-green-300">
                <Link to="/SignUp">Sign Up</Link>
              </a>
            </li>
            <li>
              <a href="#LogIn" class="hover:text-green-300">
                <Link to="/Login"> Log In</Link>
              </a>
            </li>
            <li>
              <a href="#Allproducts" class="hover:text-green-300">
                <Link to="/products"> All Products</Link>
              </a>
            </li>
            <li>
              <a href="#Cartedproducts" class="hover:text-green-300">
                <Link to="/cart">Shopping Cart</Link>
              </a>
            </li>

            <li>
              <a href="newproduct" class="hover:text-green-300">
                <Link to="products/new"> New Product</Link>
              </a>
            </li>
            <a href="logout" class="hover:text-green-300">
              <Link to="logout"> Logout</Link>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
}
