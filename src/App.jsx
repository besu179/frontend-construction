import { useState } from 'react'
import AdminPage from './AdminPage.jsx'
import SalesPage from './SalesPage.jsx'
import './App.css'

function App() {
  const [role, setRole] = useState(null)
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {

    e.preventDefault()
    const name = username.trim().toLowerCase()
    const pass = password.trim()

    if (name === 'admin' || name === 'sales') {
      if (pass !== '1234') {
        setError('Invalid password')
        return
      }
      setRole(name)
      setError('')
      setUsername('')
      setPassword('')
      return
    }
    setError('invalid username')
  }

  if (role === 'admin') {
    return <AdminPage onLogout={() => setRole(null)} />
  }
  else if (role === 'sales') {
    return <SalesPage onLogout={() => setRole(null)} />
  }

  if (role) {
    return (
      <div className="page">
        <h1>
          Hello, <span>{role}</span>
        </h1>
        <button className="logout-btn" onClick={() => setRole(null)}>
          Logout
        </button>
      </div>
    )
  }

  return (
    <div className="page">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>
          Construction Shop <span>Login</span>
        </h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default App
