import { useEffect, useState } from 'react'
import { getProducts, getAlerts } from './api'
import ProductCard from './components/ProductCard'
import './styles.css'

export default function App() {
  const [products, setProducts] = useState([])
  const [alerts, setAlerts] = useState([])

  useEffect(() => {
    getProducts().then(setProducts)
    getAlerts().then(setAlerts)
  }, [])

  return (
    <div className="app">
      <h1>Каталог товаров</h1>
      <div className="cards-grid">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>

      <h1>Предупреждения</h1>
      <ul>
        {alerts.map((a, i) => <li key={i}>{a.message}</li>)}
      </ul>

      {/* TODO: план закупок, бюджеты, чат — не успела */}
    </div>
  )
}
