const PURCHASES = [
  { id: 'PO-204', supplier: 'Alpha Cement Co', date: '2026-10-15', total: '4,200 Birr', status: 'Received' },
  { id: 'PO-203', supplier: 'SteelWorks Inc', date: '2026-10-12', total: '7,800 Birr', status: 'Pending' },
  { id: 'PO-202', supplier: 'BrickField Traders', date: '2026-10-09', total: '1,500 Birr', status: 'Received' },
]

function Purchases() {
  return (
    <section>
      <div className="toolbar">
        <input className="search-input" placeholder="Search purchases..." />
        <button className="btn-primary">+ New Purchase</button>
      </div>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>PO #</th>
              <th>Supplier</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {PURCHASES.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.supplier}</td>
                <td>{p.date}</td>
                <td>{p.total}</td>
                <td>
                  <span className={p.status === 'Received' ? 'badge ok' : 'badge warn'}>
                    {p.status}
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

export default Purchases
