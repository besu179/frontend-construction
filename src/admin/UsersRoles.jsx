const USERS = [
  { id: 1, name: 'Teshale Abel', username: 'admin', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Robel Tamirat', username: 'sales', role: 'Sales', status: 'Active' },
  { id: 3, name: 'Fikir Yohannes', username: 'cashier1', role: 'Sales', status: 'Inactive' },
]

function UsersRoles() {
  return (
    <section>
      <div className="toolbar">
        <input className="search-input" placeholder="Search users..." />
        <button className="btn-primary">+ Add User</button>
      </div>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Username</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {USERS.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.username}</td>
                <td>
                  <span className="badge role">{u.role}</span>
                </td>
                <td>
                  <span className={u.status === 'Active' ? 'badge ok' : 'badge warn'}>
                    {u.status}
                  </span>
                </td>
                <td>
                  <button className="link-btn">Edit</button>
                  <button className="link-btn danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default UsersRoles
