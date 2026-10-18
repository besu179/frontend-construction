import { useState } from 'react'
import SidebarLayout from './components/SidebarLayout.jsx'
import NewSale from './admin/sales/NewSale.jsx'
import AllSales from './admin/sales/AllSales.jsx'
import DueSales from './admin/sales/DueSales.jsx'
import SalesReturns from './admin/sales/SalesReturns.jsx'

const MENU_ITEMS = ['New Sale', 'All Sales', 'Due Sales', 'Sales Returns']

const SECTIONS = {
  'New Sale': NewSale,
  'All Sales': AllSales,
  'Due Sales': DueSales,
  'Sales Returns': SalesReturns,
}

function SalesPage({ role, onLogout }) {
  const [active, setActive] = useState('New Sale')
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

export default SalesPage
