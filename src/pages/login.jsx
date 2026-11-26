
import Message from "../components/Message";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Ingrese un correo electrónico válido.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    navigate("/home");
  }

  return (
    <main className="home-container">
      <h1>Iniciar sesión</h1>

      <p className="page-description">
        Bienvenido a RuLapp.
      </p>

      <form onSubmit={handleSubmit} className="profile-form" noValidate>
        <FormInput
          label="Correo electrónico"
          id="email"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="Ingrese su correo"
          autoComplete="email"
          required
        />

        <FormInput
          label="Contraseña"
          id="password"
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="Ingrese su contraseña"
          autoComplete="current-password"
          required
        />

        {error && (
          <Message type="error">
            {error}
        </Message>
)}

        <button className="button-primary" type="submit">
          Ingresar
        </button>
      </form>
    </main>
  );
}

export default Login;
