const TOP_ITEMS = [
  { name: 'Portland Cement 50kg', qty: 45 },
  { name: 'Steel Rebar 12mm', qty: 32 },
  { name: 'Clay Bricks (per 100)', qty: 24 },
  { name: 'River Sand (ton)', qty: 15 },
  { name: 'Roofing Sheets', qty: 9 },
]

const TOP_CUSTOMERS = [
  { name: 'Tariku Yohannes', paid: 2100 },
  { name: 'Bereket Mulugeta', paid: 1450 },
  { name: 'Dawit Samuel', paid: 320 },
  { name: 'Abebe Kebede', paid: 75 },
]

const ENDING_ITEMS = [
  { name: 'River Sand (ton)', left: 14, reorder: 20 },
  { name: 'Roofing Sheets', left: 8, reorder: 15 },
  { name: 'PVC Pipes 4"', left: 6, reorder: 10 },
]

const TOP_SELLERS = [
  { name: 'Robel Tamirat (Sales)', total: 2450 },
  { name: 'Yohannes Fikir (Sales)', total: 1780 },
  { name: 'Kenenisa Girma (Sales)', total: 640 },
]

function BarList({ data, format }) {
  const max = Math.max(...data.map((d) => d.value))
  return (
    <div className="bar-list">
      {data.map((d) => (
        <div className="bar-row" key={d.name}>
          <span className="bar-name">{d.name}</span>
          <span className="bar-track">
            <span
              className={`bar-fill ${d.critical ? 'critical' : ''}`}
              style={{ width: `${Math.max((d.value / max) * 100, 4)}%` }}
            />
          </span>
          <span className="bar-value">{format ? format(d.value) : d.value}</span>
        </div>
      ))}
    </div>
  )
}

function Dashboard() {
  const stats = [
    { label: 'Total Products', value: '1,240' },
    { label: "Today's Sales", value: '3,450 Birr' },
    { label: 'Customers', value: '318' },
    { label: 'Low Stock Items', value: '3' },
  ]

  return (
    <section>
      <div className="stat-grid">
        {stats.map((s) => (
          <div className="stat-card" key={s.label}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="chart-grid">
        <div className="panel">
          <h2>Most Sold Items Today</h2>
          <BarList
            data={TOP_ITEMS.map((i) => ({ name: i.name, value: i.qty }))}
          />
        </div>

        <div className="panel">
          <h2>Top Paid Customers Today</h2>
          <BarList
            data={TOP_CUSTOMERS.map((c) => ({ name: c.name, value: c.paid }))}
            format={(v) => `${v.toLocaleString()} Birr`}
          />
        </div>

        <div className="panel">
          <h2>Items Nearing End</h2>
          <BarList
            data={ENDING_ITEMS.map((i) => ({
              name: i.name,
              value: i.left,
              critical: i.left <= i.reorder * 0.7,
            }))}
          />
          <p className="empty-text chart-note">Remaining stock vs reorder level</p>
        </div>

        <div className="panel">
          <h2>Top Seller Today</h2>
          <BarList
            data={TOP_SELLERS.map((s) => ({ name: s.name, value: s.total }))}
            format={(v) => `${v.toLocaleString()} Birr`}
          />
        </div>
      </div>
    </section>
  )
}

export default Dashboard
