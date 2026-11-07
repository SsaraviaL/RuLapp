import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [mensaje, setMensaje] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    setError('')
    setMensaje('')

    if (!email || !password) {
      setError('Por favor, complete todos los campos.')
      return
    }

    navigate('/home')
  }

  return (
    <div>
      <h1>Iniciar sesión</h1>

      <p>Bienvenido a RuLapp</p>

      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="email">
            Correo electrónico
          </label>

          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Ingrese su correo"
          />
        </div>

        <div>
          <label htmlFor="password">
            Contraseña
          </label>

          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Ingrese su contraseña"
          />
        </div>

        {error && (
          <p>{error}</p>
        )}

        {mensaje && (
          <p>{mensaje}</p>
        )}

        <button type="submit">
          Ingresar
        </button>

      </form>
    </div>
  )
}

export default Login