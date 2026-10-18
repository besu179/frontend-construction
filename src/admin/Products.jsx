const PRODUCTS = [
  { id: 1, name: 'Portland Cement 50kg', category: 'Cement', price: '8.50 Birr', stock: 220 },
  { id: 2, name: 'Steel Rebar 12mm', category: 'Steel', price: '12.00 Birr', stock: 85 },
  { id: 3, name: 'Clay Bricks (per 100)', category: 'Bricks', price: '45.00 Birr', stock: 60 },
  { id: 4, name: 'River Sand (ton)', category: 'Aggregates', price: '30.00 Birr', stock: 14 },
]

function Products() {
  return (
    <section>
      <div className="toolbar">
        <input className="search-input" placeholder="Search products..." />
        <button className="btn-primary">+ Add Product</button>
      </div>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>{p.price}</td>
                <td>{p.stock}</td>
                <td>
                  <span className={p.stock < 20 ? 'badge warn' : 'badge ok'}>
                    {p.stock < 20 ? 'Low' : 'In Stock'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Products
