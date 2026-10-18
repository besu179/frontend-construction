const RETURNS = [
  { id: 'RET-118', invoice: 'INV-1039', customer: 'Abebe Kebede', date: '2026-10-16', amount: '120.00 Birr', reason: 'Damaged goods' },
  { id: 'RET-117', invoice: 'INV-1031', customer: 'Workneh Henok', date: '2026-10-08', amount: '45.00 Birr', reason: 'Wrong item' },
]

function SalesReturns() {
  return (
    <section>
      <div className="toolbar">
        <input className="search-input" placeholder="Search returns..." />
        <button className="btn-primary">+ New Return</button>
      </div>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Return #</th>
              <th>Invoice</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {RETURNS.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.invoice}</td>
                <td>{r.customer}</td>
                <td>{r.date}</td>
                <td>{r.amount}</td>
                <td>{r.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default SalesReturns
