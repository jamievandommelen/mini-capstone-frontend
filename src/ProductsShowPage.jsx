import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

import { ProductsShow } from "./ProductsShow";
import { CartedProductsNew } from "./CartedProductsNew";

export function ProductsShowPage() {
  const product = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (product, params) => {
    console.log("handleUpdate", product);
    axios.patch(`/products/${product.id}.json`, params).then(() => {
      navigate("/products");
    });
  };

  const handleCartCreate = () => {
    console.log("handleCartCreate");
  };

  const handleDestroy = (product) => {
    console.log("handleDestroy", product);
    axios.delete(`/products/${product.id}.json`).then(() => {
      navigate("/products");
    });
  };

  return (
    <div>
      <ProductsShow product={product} onUpdate={handleUpdate} onDestroy={handleDestroy} />
      <CartedProductsNew oncartCreate={handleCartCreate} product={product} />
    </div>
  );
}
