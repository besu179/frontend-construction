const SALES = [
  { id: 'INV-1042', customer: 'Dawit Samuel', date: '2026-10-18', total: '320.00 Birr', status: 'Paid' },
  { id: 'INV-1041', customer: 'Tariku Yohannes', date: '2026-10-17', total: '1,450.00 Birr', status: 'Due' },
  { id: 'INV-1040', customer: 'Bereket Mulugeta', date: '2026-10-17', total: '75.50 Birr', status: 'Paid' },
  { id: 'INV-1039', customer: 'Abebe Kebede', date: '2026-10-16', total: '2,100.00 Birr', status: 'Paid' },
]

function AllSales() {
  return (
    <section>
      <div className="toolbar">
        <input className="search-input" placeholder="Search sales..." />
        <button className="btn-primary">+ New Sale</button>
      </div>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {SALES.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.customer}</td>
                <td>{s.date}</td>
                <td>{s.total}</td>
                <td>
                  <span className={s.status === 'Paid' ? 'badge ok' : 'badge warn'}>
                    {s.status}
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

export default AllSales
