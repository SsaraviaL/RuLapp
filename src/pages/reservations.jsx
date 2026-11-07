
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Reservations() {
  const location = useLocation();
  const navigate = useNavigate();

  const rutaSeleccionada = location.state?.ruta;

  const [reservaConfirmada, setReservaConfirmada] = useState(false);

  const reservasEjemplo = [
    {
      id: 1,
      origen: "Medellín",
      destino: "Bogotá",
      fecha: "15/10/2026",
      estado: "Confirmada",
    },
    {
      id: 2,
      origen: "Itagüí",
      destino: "Rionegro",
      fecha: "18/10/2026",
      estado: "Pendiente",
    },
  ];

  function confirmarReserva() {
    setReservaConfirmada(true);
  }

  return (
    <main className="home-container routes-page">
      <h1>Mis reservas</h1>

      <p className="page-description">
        Consulta el estado y los detalles de tus viajes.
      </p>

      {rutaSeleccionada && (
        <section className="route-card selected-route">
          <h2>Ruta seleccionada</h2>

          <h3>
            {rutaSeleccionada.origen} → {rutaSeleccionada.destino}
          </h3>

          <p>
            <strong>Fecha:</strong> {rutaSeleccionada.fecha}
          </p>

          <p>
            <strong>Hora:</strong> {rutaSeleccionada.hora}
          </p>

          <p>
            <strong>Precio:</strong>{" "}
            {rutaSeleccionada.precio.toLocaleString("es-CO", {
              style: "currency",
              currency: "COP",
              maximumFractionDigits: 0,
            })}
          </p>

          <p>
            <strong>Estado:</strong>{" "}
            {reservaConfirmada ? "Confirmada (demostración)" : "Pendiente"}
          </p>

          {!reservaConfirmada ? (
            <button
              className="button-primary"
              type="button"
              onClick={confirmarReserva}
            >
              Confirmar reserva
            </button>
          ) : (
            <div className="confirmation-message" role="status">
              <h3>¡Reserva confirmada!</h3>
              <p>
                Tu reserva de prueba para el viaje de{" "}
                {rutaSeleccionada.origen} a {rutaSeleccionada.destino} se ha
                confirmado en esta demostración.
              </p>
              <p>
                 todavía no se  guarda en la base de datos.
              </p>
              <button
                className="button-primary"
                type="button"
                onClick={() => navigate("/routes")}
              >
                Buscar otra ruta
              </button>
            </div>
          )}
        </section>
      )}

      <h2>Reservas de ejemplo</h2>

      <div className="routes-grid">
        {reservasEjemplo.map((reserva) => (
          <article className="route-card" key={reserva.id}>
            <h3>
              {reserva.origen} → {reserva.destino}
            </h3>

            <p>
              <strong>Fecha:</strong> {reserva.fecha}
            </p>

            <p>
              <strong>Estado:</strong> {reserva.estado}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Reservations;
