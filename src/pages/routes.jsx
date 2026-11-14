
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RoutesPage() {
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [fecha, setFecha] = useState("");
  const [busquedaRealizada, setBusquedaRealizada] = useState(false);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Rutas de ejemplo para probar la interfaz
  const rutasDisponibles = [
    {
      id: 1,
      origen: "Medellín",
      destino: "Bogotá",
      fecha: "2026-10-15",
      hora: "7:00 a. m.",
      precio: 80000,
      cupos: 3,
    },
    {
      id: 2,
      origen: "Itagüí",
      destino: "Rionegro",
      fecha: "2026-10-18",
      hora: "9:00 a. m.",
      precio: 25000,
      cupos: 2,
    },
    {
      id: 3,
      origen: "Medellín",
      destino: "Cali",
      fecha: "2026-10-20",
      hora: "6:30 a. m.",
      precio: 95000,
      cupos: 4,
    },
  ];

  function buscarRutas(evento) {
    
    evento.preventDefault();
    console.log("Se ejecutó la búsqueda");

    setMensaje("");
    setBusquedaRealizada(true);
  }

  
const normalizarTexto = (texto) =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();

const resultados = rutasDisponibles.filter((ruta) => {
  const coincideOrigen =
    normalizarTexto(ruta.origen) === normalizarTexto(origen);

  const coincideDestino =
    normalizarTexto(ruta.destino) === normalizarTexto(destino);

  const coincideFecha = !fecha || ruta.fecha === fecha;

  return coincideOrigen && coincideDestino && coincideFecha;
});


  return (
    <main className="home-container routes-page">
      <h1>Buscar rutas</h1>
      <p className="page-description">
        Encuentra opciones de transporte para tu próximo viaje.
      </p>

      <form className="search-form" onSubmit={buscarRutas}>
        <div className="form-group">
          <label htmlFor="origen">Ciudad de origen</label>
          <input
            id="origen"
            type="text"
            placeholder="Ej. Medellín"
            value={origen}
            onChange={(evento) => setOrigen(evento.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="destino">Ciudad de destino</label>
          <input
            id="destino"
            type="text"
            placeholder="Ej. Bogotá"
            value={destino}
            onChange={(evento) => setDestino(evento.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fecha">Fecha del viaje (opcional)</label>
          <input
            id="fecha"
            type="date"
            value={fecha}
            onChange={(evento) => setFecha(evento.target.value)}
          />
        </div>

        <button className="button-primary" type="submit">
          Buscar
        </button>
      </form>

      {busquedaRealizada && (
        <section className="route-results" aria-live="polite">
          <h2>Resultados de la búsqueda</h2>

          {resultados.length > 0 ? (
            <div className="routes-grid">
              {resultados.map((ruta) => (
                <article className="route-card" key={ruta.id}>
                  <h3>
                    {ruta.origen} → {ruta.destino}
                  </h3>

                  <p>
                    <strong>Fecha:</strong> {ruta.fecha}
                  </p>
                  <p>
                    <strong>Hora:</strong> {ruta.hora}
                  </p>
                  <p>
                    <strong>Precio:</strong>{" "}
                    {ruta.precio.toLocaleString("es-CO", {
                      style: "currency",
                      currency: "COP",
                      maximumFractionDigits: 0,
                    })}
                  </p>
                  <p>
                    <strong>Cupos disponibles:</strong> {ruta.cupos}
                  </p>

                  <button
                    className="button-primary"
                    type="button"
                    onClick={() =>
                      navigate("/reservations", {
                        state: { ruta },
                      })
                    }
                  >
                    Seleccionar ruta
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <p>
              No encontramos rutas para esos datos. Prueba con Medellín →
              Bogotá, Itagüí → Rionegro o Medellín → Cali.
            </p>
          )}
        </section>
      )}
    </main>
  );
}

export default RoutesPage;
