
import { useState } from "react";

function Profile() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    documento: "",
    telefono: "",
  });

  const [mensaje, setMensaje] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });

    setMensaje("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !form.nombre.trim() ||
      !form.correo.trim() ||
      !form.documento.trim() ||
      !form.telefono.trim()
    ) {
      setMensaje("Por favor, completa todos los campos.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) {
      setMensaje("Ingresa un correo electrónico válido.");
      return;
    }

    if (!/^\d{6,15}$/.test(form.documento)) {
      setMensaje("El documento debe contener entre 6 y 15 números.");
      return;
    }

    if (!/^\d{7,15}$/.test(form.telefono)) {
      setMensaje("El teléfono debe contener entre 7 y 15 números.");
      return;
    }

    setMensaje("Datos validados correctamente. pero no conectados a la base de datos.");
  }

  return (
    <main className="profile-container">
      <h1>Mi perfil</h1>

      <p className="profile-description">
        Consulta y actualiza tus datos personales.
      </p>

      <form className="profile-form" onSubmit={handleSubmit} noValidate>
        <div className="profile-field">
          <label htmlFor="nombre">Nombre completo</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Ingresa tu nombre completo"
            maxLength={100}
            autoComplete="name"
            required
          />
        </div>

        <div className="profile-field">
          <label htmlFor="correo">Correo electrónico</label>
          <input
            id="correo"
            name="correo"
            type="email"
            value={form.correo}
            onChange={handleChange}
            placeholder="ejemplo@correo.com"
            maxLength={150}
            autoComplete="email"
            required
          />
        </div>

        <div className="profile-field">
          <label htmlFor="documento">Número de documento</label>
          <input
            id="documento"
            name="documento"
            type="text"
            inputMode="numeric"
            value={form.documento}
            onChange={handleChange}
            placeholder="Ingresa tu documento"
            maxLength={15}
            required
          />
        </div>

        <div className="profile-field">
          <label htmlFor="telefono">Número de teléfono</label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            inputMode="numeric"
            value={form.telefono}
            onChange={handleChange}
            placeholder="Ingresa tu teléfono"
            maxLength={15}
            autoComplete="tel"
            required
          />
        </div>

        <button className="profile-button" type="submit">
          Validar datos
        </button>

        {mensaje && (
          <p className="profile-message" role="status" aria-live="polite">
            {mensaje}
          </p>
        )}
      </form>
    </main>
  );
}

export default Profile;
