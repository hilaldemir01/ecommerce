import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="checkout" element={<h1>Checkout Page</h1>} />
      <Route path="orders" element={<h1>Orders Page</h1>} />
    </Routes>
  )
}

export default App
