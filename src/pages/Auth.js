import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { BtnBack } from "../assets/assetsHtml";
import Carrusel from "../components/Carrusel";

function Auth() {
  let session = sessionStorage.getItem("auth") || false;

  return (
    <>
      {!session && <Login />}
      {session && <Logout />}
    </>
  );
}

function Logout() {
  const closeSession = () => {
    sessionStorage.removeItem("auth");
    window.location.reload();
  };

  return (
    <>
      <h2>
        Ya estas registrado, para registrarte de nuevo pulsa el botón para
        cerrar sesión
      </h2>
      <button className="btn-danger" onClick={closeSession}>
        Cerrar sesion
      </button>
    </>
  );
}

function Login() {
  const [options, setOptions] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setOptions({
      headers: { "Content-type": "application/json" },
      body: {
        Correo: e.target.Correo.value,
        Password: e.target.Password.value,
      },
    });
  };

  const { data, error, isPending } = useAuth(options);

  return (
    <div className="d-flex expand">
      <div className="wth-90 m-auto wth-max-500px border border-secondary rounded p-2">
        <Carrusel />
        <BtnBack type="secondary" />
        <p className="text-center">Inicia sesión</p>
        <form onSubmit={submitForm}>
          <label htmlFor="Correo">Escribe tu correo</label>
          <input
            className="form-control my-2"
            type="email"
            name="Correo"
            id="Correo"
            placeholder="correo"
            autoComplete="off"
            required
          />
          <label htmlFor="Password">Escribe tu contraseña</label>
          <input
            className="form-control my-2"
            type="password"
            name="Password"
            id="Password"
            placeholder="contraseña"
            autoComplete="off"
            required
          />
          {!error && data && <Success nombre={data.Nombre} />}
          {error && !isPending && <Error />}
          <button
            className="btn btn-secondary d-block my-1 wth-80 mx-auto"
            type="submit"
          >
            <i className="bi bi-door-open-fill"></i> Entrar
          </button>
          <button
            type="reset"
            className="btn btn-primary d-block my-1 mx-auto wth-50"
          >
            <i className="bi bi-eraser-fill"></i> Limpiar
          </button>
        </form>
      </div>
    </div>
  );
}

function Success({ nombre }) {
  setInterval(() => {
    window.history.back();
  }, 1900);

  return (
    <span style={{ color: "var(--sv-success)" }}>
      Bienvenido {nombre} en un momento sera redirigido
    </span>
  );
}

function Error() {
  return (
    <span style={{ color: "var(--sv-danger)" }}>
      El usuario o la contraseña son icorrectas, si quieres obtener una cuenta
      comunicate con el desarrollador de este sistema
    </span>
  );
}

export default Auth;
