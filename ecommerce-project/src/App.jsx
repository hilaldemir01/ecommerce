import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<h1>Orders Page</h1>} />
    </Routes>
  )
}

export default App
