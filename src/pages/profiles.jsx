
import Message from "../components/Message";
import { useState } from "react";
import FormInput from "../components/FormInput";

function Profile() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    documento: "",
    telefono: "",
  });

  const [mensaje, setMensaje] = useState("");

  function actualizarCampo(campo, valor) {
    setForm((anterior) => ({
      ...anterior,
      [campo]: valor,
    }));

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

    setMensaje(
      "Datos validados correctamente. No están conectados a la base de datos."
    );
  }

  return (
    <main className="profile-container">
      <h1>Mi perfil</h1>

      <p className="profile-description">
        Consulta y actualiza tus datos personales.
      </p>

      <form className="profile-form" onSubmit={handleSubmit} noValidate>
        <FormInput
          label="Nombre completo"
          id="nombre"
          value={form.nombre}
          onChange={(valor) => actualizarCampo("nombre", valor)}
          placeholder="Ingresa tu nombre completo"
          maxLength={100}
          autoComplete="name"
          required
          className="profile-field"
        />

        <FormInput
          label="Correo electrónico"
          id="correo"
          type="email"
          value={form.correo}
          onChange={(valor) => actualizarCampo("correo", valor)}
          placeholder="ejemplo@correo.com"
          maxLength={150}
          autoComplete="email"
          required
          className="profile-field"
        />

        <FormInput
          label="Número de documento"
          id="documento"
          value={form.documento}
          onChange={(valor) => actualizarCampo("documento", valor)}
          placeholder="Ingresa tu documento"
          maxLength={15}
          inputMode="numeric"
          required
          className="profile-field"
        />

        <FormInput
          label="Número de teléfono"
          id="telefono"
          type="tel"
          value={form.telefono}
          onChange={(valor) => actualizarCampo("telefono", valor)}
          placeholder="Ingresa tu teléfono"
          maxLength={15}
          inputMode="numeric"
          autoComplete="tel"
          required
          className="profile-field"
        />

        <button className="profile-button" type="submit">
          Validar datos
        </button>

        {mensaje && (
          <Message
            type={mensaje.startsWith("Datos validados") ? "success" : "error"}
  >
    {mensaje}
  </Message>
)}
      </form>
    </main>
  );
}

export default Profile;
