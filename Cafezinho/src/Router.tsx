import { Routes, Route } from 'react-router-dom'
import { Checkout } from './pages/checkout'
import { Home } from './pages/home'
import { Sucess } from './pages/sucess'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/sucess" element={<Sucess />} />
    </Routes>
  )
}
