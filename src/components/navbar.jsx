
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-logo">
        RuLapp
      </Link>

      <div className="navbar-links">
        <Link to="/home">Inicio</Link>
        <Link to="/routes">Buscar rutas</Link>
        <Link to="/reservations">Mis reservas</Link>
        <Link to="/profile">Mi perfil</Link>
      </div>
    </nav>
  )
}

export default Navbar
