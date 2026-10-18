import { useState } from 'react'
import './Admin.css'

const MENU_ITEMS = [
  'Dashboard',
  'Products',
  'Sales',
  'Customers',
  'Suppliers',
  'Purchases',
  'Inventory',
  'Payments',
  'Reports',
  'Users and Roles',
  'Settings',
]

function AdminPage({ onLogout }) {
  const [active, setActive] = useState('Dashboard')

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

export default AdminPage
