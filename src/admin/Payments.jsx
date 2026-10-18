const PAYMENTS = [
  { id: 'PAY-501', invoice: 'INV-1042', party: 'Dawit Samuel', date: '2026-10-18', amount: '320.00 Birr', method: 'Cash' },
  { id: 'PAY-500', invoice: 'INV-1040', party: 'Bereket Mulugeta', date: '2026-10-17', amount: '75.50 Birr', method: 'Card' },
  { id: 'PAY-499', invoice: 'INV-1039', party: 'Abebe Kebede', date: '2026-10-16', amount: '2,100.00 Birr', method: 'Bank' },
]

function Payments() {
  return (
    <section>
      <div className="toolbar">
        <input className="search-input" placeholder="Search payments..." />
        <button className="btn-primary">+ Record Payment</button>
      </div>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Payment #</th>
              <th>Invoice</th>
              <th>Party</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Method</th>
            </tr>
          </thead>
          <tbody>
            {PAYMENTS.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.invoice}</td>
                <td>{p.party}</td>
                <td>{p.date}</td>
                <td>{p.amount}</td>
                <td>{p.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Payments
