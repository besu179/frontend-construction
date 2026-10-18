const DUE_SALES = [
  { id: 'INV-1041', customer: 'Tariku Yohannes', date: '2026-10-17', total: '1,450.00 Birr', due: '1,450.00 Birr' },
  { id: 'INV-1036', customer: 'Eyob Biruk', date: '2026-10-11', total: '680.00 Birr', due: '300.00 Birr' },
  { id: 'INV-1030', customer: 'Desta Yonas', date: '2026-10-04', total: '920.00 Birr', due: '920.00 Birr' },
]

function DueSales() {
  return (
    <section>
      <div className="toolbar">
        <input className="search-input" placeholder="Search due sales..." />
        <button className="btn-primary">+ Record Payment</button>
      </div>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Total</th>
              <th>Due Amount</th>
            </tr>
          </thead>
          <tbody>
            {DUE_SALES.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.customer}</td>
                <td>{s.date}</td>
                <td>{s.total}</td>
                <td>
                  <span className="badge warn">{s.due}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default DueSales
