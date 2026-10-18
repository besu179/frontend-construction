const STOCK = [
  { id: 1, item: 'Portland Cement 50kg', in: 220, out: 45, reorder: 50 },
  { id: 2, item: 'Steel Rebar 12mm', in: 85, out: 30, reorder: 40 },
  { id: 3, item: 'Clay Bricks (per 100)', in: 60, out: 12, reorder: 25 },
  { id: 4, item: 'River Sand (ton)', in: 14, out: 9, reorder: 20 },
]

function Inventory() {
  return (
    <section>
      <div className="toolbar">
        <input className="search-input" placeholder="Search inventory..." />
        <button className="btn-primary">+ Stock Adjustment</button>
      </div>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Stock In</th>
              <th>Stock Out</th>
              <th>Reorder Level</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {STOCK.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.item}</td>
                <td>{r.in}</td>
                <td>{r.out}</td>
                <td>{r.reorder}</td>
                <td>
                  <span className={r.in - r.out < r.reorder ? 'badge warn' : 'badge ok'}>
                    {r.in - r.out < r.reorder ? 'Reorder' : 'OK'}
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

export default Inventory
