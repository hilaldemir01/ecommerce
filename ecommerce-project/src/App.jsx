import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
 // const [products, setProducts] = useState([]);

  useEffect(() => {
  /*  axios.get("/api/products")
    .then((response) => {
      setProducts(response.data);
    });*/

    axios.get("/api/cart-items?expand=product")
    .then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <Routes>
      <Route index path="/" element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage />} />

    </Routes>
  )
}

export default App
