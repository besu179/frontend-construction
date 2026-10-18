import { useState } from 'react'
import './Admin.css'

const MENU_ITEMS = [
  'New Sale',
  'All Sales',
  'Due Sales',
  'Sales Returns',
]

function SalesPage({ role, onLogout }) {
  const [active, setActive] = useState('New Sale')
  const [open, setOpen] = useState(false)

  function selectItem(item) {
    setActive(item)
    setOpen(false)
  }

  return (
    <div className="admin-layout">
      <header className="topbar">
        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <span className="topbar-brand">Construction Shop</span>
        <span className="role-badge">{role}</span>
      </header>

      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <div className="brand">Construction Shop</div>
        <span className="role-badge sidebar-role">{role}</span>
        <nav>
          {MENU_ITEMS.map((item) => (
            <button
              key={item}
              className={`menu-item ${active === item ? 'active' : ''}`}
              onClick={() => selectItem(item)}
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
