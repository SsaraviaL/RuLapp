
function ReservationCard({ reserva }) {
  return (
    <article className="route-card">
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
  );
}

export default ReservationCard;
