const CUSTOMERS = [
  { id: 1, name: 'Eyob Biruk', phone: '0911223344', orders: 12, spent: '2,340 Birr' },
  { id: 2, name: 'Aschalew Daniel', phone: '0912345678', orders: 34, spent: '18,900 Birr' },
  { id: 3, name: 'Workneh Henok', phone: '0913456789', orders: 5, spent: '610 Birr' },
  { id: 4, name: 'Desta Yonas', phone: '0914567890', orders: 21, spent: '9,750 Birr' },
]

function Customers() {
  return (
    <section>
      <div className="toolbar">
        <input className="search-input" placeholder="Search customers..." />
        <button className="btn-primary">+ Add Customer</button>
      </div>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Orders</th>
              <th>Total Spent</th>
            </tr>
          </thead>
          <tbody>
            {CUSTOMERS.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.phone}</td>
                <td>{c.orders}</td>
                <td>{c.spent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Customers
