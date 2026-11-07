
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar'

function Home() {
  return (
    <>
      

      <main className="home-container">
        <section className="home-hero">
          <h1>¡Bienvenido a RuLapp!</h1>

          <p>
            Encuentra y reserva rutas de transporte
            de manera fácil y segura.
          </p>

          <Link to="/routes" className="button-primary">
            Buscar rutas
          </Link>
        </section>
      </main>
    </>
  )
}

export default Home
