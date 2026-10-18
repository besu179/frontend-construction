function Settings() {
  return (
    <section>
      <form className="panel settings-form" onSubmit={(e) => e.preventDefault()}>
        <h2>Shop Settings</h2>
        <label>
          Shop Name
          <input type="text" defaultValue="Construction Shop" />
        </label>
        <label>
          Phone
          <input type="tel" placeholder="0912345678" />
        </label>
        <label>
          Address
          <input type="text" defaultValue="Addis Ababa, Ethiopia" />
        </label>
        
        <button className="btn-primary" type="submit">
          Save Changes
        </button>
      </form>
    </section>
  )
}

export default Settings
