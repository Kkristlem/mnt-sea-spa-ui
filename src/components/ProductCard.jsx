export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Категория: {product.category}</p>
      <p>Остаток: {product.total_stock} {product.unit}</p>
    </div>
  )
}
