
function RouteCard({ ruta, onSeleccionar }) {
  return (
    <article className="route-card">
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
        onClick={() => onSeleccionar(ruta)}
      >
        Seleccionar ruta
      </button>
    </article>
  );
}

export default RouteCard;
