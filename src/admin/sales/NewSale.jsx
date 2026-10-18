const CUSTOMERS = [
  'Dawit Samuel',
  'Tariku Yohannes',
  'Bereket Mulugeta',
  'Abebe Kebede',
  'Eyob Biruk',
]

const ITEMS = [
  'Portland Cement 50kg',
  'Steel Rebar 12mm',
  'Clay Bricks (per 100)',
  'River Sand (ton)',
  'Roofing Sheets',
]

function NewSale() {
  return (
    <section>
      <form className="panel settings-form" onSubmit={(e) => e.preventDefault()}>
        <h2>New Sale</h2>
        <label>
          Customer
          <select defaultValue={CUSTOMERS[0]}>
            {CUSTOMERS.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label>
          Item
          <select defaultValue={ITEMS[0]}>
            {ITEMS.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </label>
        <label>
          Quantity
          <input type="number" min="1" defaultValue="1" />
        </label>
        <label>
          Unit Price
          <input type="number" min="0" step="0.01" placeholder="0.00" />
        </label>
        <button className="btn-primary" type="submit">
          Save Sale
        </button>
      </form>
    </section>
  )
}

export default NewSale
