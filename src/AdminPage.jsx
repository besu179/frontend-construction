import { useState } from 'react'
import SidebarLayout from './components/SidebarLayout.jsx'
import Dashboard from './admin/Dashboard.jsx'
import Products from './admin/Products.jsx'
import Sales from './admin/Sales.jsx'
import Customers from './admin/Customers.jsx'
import Suppliers from './admin/Suppliers.jsx'
import Purchases from './admin/Purchases.jsx'
import Inventory from './admin/Inventory.jsx'
import Payments from './admin/Payments.jsx'
import Reports from './admin/Reports.jsx'
import UsersRoles from './admin/UsersRoles.jsx'
import Settings from './admin/Settings.jsx'

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

const SECTIONS = {
  Dashboard,
  Products,
  Sales,
  Customers,
  Suppliers,
  Purchases,
  Inventory,
  Payments,
  Reports,
  'Users and Roles': UsersRoles,
  Settings,
}

function AdminPage({ role, onLogout }) {
  const [active, setActive] = useState('Dashboard')
  const Section = SECTIONS[active]

  return (
    <SidebarLayout
      role={role}
      items={MENU_ITEMS}
      active={active}
      onActiveChange={setActive}
      onLogout={onLogout}
    >
      <Section />
    </SidebarLayout>
  )
}

export default AdminPage
