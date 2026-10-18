import { useState } from 'react'
import './Admin.css'

const MENU_ITEMS = [
  'New Sale',
  'All Sales',
  'Due Sales',
  'Sales Returns'
]

function SalesPage({ onLogout }) {
  const [active, setActive] = useState('New Sale')

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <div className="brand">Construction Shop</div>
        <nav>
          {MENU_ITEMS.map((item) => (
            <button
              key={item}
              className={`menu-item ${active === item ? 'active' : ''}`}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          ))}
        </nav>
        <button className="menu-item logout" onClick={onLogout}>
          Logout
        </button>
      </aside>
      <main className="admin-content">
        <h1>{active}</h1>
      </main>
    </div>
  )
}

export default SalesPage
