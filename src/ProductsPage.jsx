import { ProductsIndex } from "./ProductsIndex";
import { useState, useEffect } from "react";
import axios from "axios";
import { ProductsNew } from "./ProductsNew";
import { Modal } from ".Modal";
import { ProductsShow } from "./ProductsShow";

export function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate");
    axios.post("/products.json", params).then((response) => {
      setProducts([...products, response.data]);
      successCallback();
    });
  };

  const handleShow = (product) => {
    console.log("handleShow", product);
    setIsProductsShowVisible(true);
    setcurrentProduct(product);
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <h1>Welcome my page :P!</h1>
      <ProductsNew onCreate={handleCreate} />
      <ProductsIndex products={products} onShow={handleShow} />
      <Modal show={isProductsShowVisible} onClose={() => setIsProductsShowVisible(false)}>
        <ProductsShow product={currentProduct} />
      </Modal>
    </main>
  );
}
