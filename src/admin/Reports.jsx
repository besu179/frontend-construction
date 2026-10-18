const REPORTS = [
  { name: 'Sales Report', desc: 'Sales by day, month and product' },
  { name: 'Purchase Report', desc: 'Purchases by supplier and date' },
  { name: 'Profit & Loss', desc: 'Revenue versus expenses' },
]

function Reports() {
  return (
    <section>
      <div className="report-grid">
        {REPORTS.map((r) => (
          <div className="panel report-card" key={r.name}>
            <h2>{r.name}</h2>
            <p className="empty-text">{r.desc}</p>
            <button className="btn-primary">View Report</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reports
