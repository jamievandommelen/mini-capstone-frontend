import axios from "axios";
import { Header } from "./Header";
import { ProductsIndexPage } from "./ProductsIndexPage";
import { Footer } from "./Footer";
import { HomePage } from "./HomePage";
import { SignupPage } from "./SignUpPage";
import { LoginPage } from "./LoginPage";
import { ProductsNewPage } from "./ProductsNewPage";
import { LogoutLinkPage } from "./LogoutLinkPage";
import { ProductsShowPage } from "./ProductsShowPage";
import { CartedProductsPage } from "./CartedProductsPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mini-capstone-api-amst.onrender.com";

axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/products",
        element: <ProductsIndexPage />,
        loader: () => axios.get("/products.json").then((response) => response.data),
      },
      {
        path: "products/new",
        element: <ProductsNewPage />,
      },
      {
        path: "/cart",
        element: <CartedProductsPage />,
        loader: () => axios.get("/carted_products.json").then((response) => response.data),
      },
      {
        path: "/products/:id",
        element: <ProductsShowPage />,
        loader: ({ params }) => axios.get(`/products/${params.id}.json`).then((response) => response.data),
      },
      {
        path: "/logout",
        element: <LogoutLinkPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
