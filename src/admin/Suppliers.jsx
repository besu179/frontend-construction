const SUPPLIERS = [
  { id: 1, name: 'Alpha Cement Co', contact: 'Girma Abebe', phone: '0915678901', items: 'Cement' },
  { id: 2, name: 'SteelWorks Inc', contact: 'Yonas Chala', phone: '0916789012', items: 'Steel' },
  { id: 3, name: 'BrickField Traders', contact: 'Samuel Elias', phone: '0917890123', items: 'Bricks' },
]

function Suppliers() {
  return (
    <section>
      <div className="toolbar">
        <input className="search-input" placeholder="Search suppliers..." />
        <button className="btn-primary">+ Add Supplier</button>
      </div>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Supplier</th>
              <th>Contact Person</th>
              <th>Phone</th>
              <th>Supplies</th>
            </tr>
          </thead>
          <tbody>
            {SUPPLIERS.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.contact}</td>
                <td>{s.phone}</td>
                <td>{s.items}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Suppliers
