import { useEffect, useState } from 'react'
import '../Admin.css'

function SidebarLayout({ role, items, active, onActiveChange, onLogout, children }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    document.body.style.overflow = open ? 'hidden' : ''
    root.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
      root.style.overflow = ''
    }
  }, [open])

  function selectItem(item) {
    onActiveChange(item)
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
          {items.map((item) => (
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
        <div className="section-body">{children}</div>
      </main>
    </div>
  )
}

export default SidebarLayout
