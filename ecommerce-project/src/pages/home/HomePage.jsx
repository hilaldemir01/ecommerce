import axios from "axios";
import { useEffect, useState } from "react";
import "./HomePage.css";
import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";
export function HomePage({ cart}) {
  const [products, setProducts] = useState([]);
  const [setCart] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });

    axios.get("/api/cart-items").then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
