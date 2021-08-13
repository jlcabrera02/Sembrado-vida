import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

function Auth() {
  const [form, setForm] = useState(null);

  const handleChange = (e) => {
    if (e.target.value === "") {
      setForm(null);
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  const reset = () => {
    setForm(null);
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  const { data, error, errorBody } = useAuth(form);

  return (
    <div className="d-flex expand">
      <div className="wth-80 m-auto wth-max-500px">
        <p className="text-center">Inicia sesión</p>
        <form onSubmit={submitForm}>
          <input
            className="form-control my-2"
            type="email"
            name="Correo"
            placeholder="correo"
            required
            onChange={handleChange}
          />
          <input
            className="form-control my-2"
            type="password"
            name="Password"
            placeholder="contraseña"
            required
            onChange={handleChange}
          />
          <button
            className="btn btn-secondary d-block my-1 wth-80 mx-auto"
            type="submit"
            data-bs-toggle="modal"
            data-bs-target="#modal"
          >
            <i className="bi bi-door-open-fill"></i> Entrar
          </button>
          <button
            type="reset"
            className="btn btn-primary d-block my-1 mx-auto wth-50"
            onClick={reset}
          >
            <i className="bi bi-eraser-fill"></i> Limpiar
          </button>
        </form>
        {!error && data && <Modal user={data[0].Nombre} />}
        {error && errorBody && <ModalError data={errorBody} />}
      </div>
    </div>
  );
}

function Modal({ user }) {
  const home = () => {
    window.location.href = "/";
  };

  return (
    <>
      <div
        className="modal fade"
        id="modal"
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Hola <span style={{ color: "var(--sv-orange)" }}>{user}</span>
              </h5>
            </div>
            <div className="modal-body">
              Has iniciado sesión satisfactoriamente
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={home}>
                <i className="bi bi-house-door-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ModalError({ data }) {
  const home = () => {
    window.location.href = "/";
  };

  return (
    <>
      <div className="modal fade" id="modal" aria-hidden="true" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Error {data.status}</h5>
              <button
                className="btn-close"
                data-bs-dismiss="modal"
                arial-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h6>
                {data.status === 400
                  ? "Me estas dando campos vacios, rellena bien el formulario de sesión"
                  : "Usuario o contraseña incorrecta"}
              </h6>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={home}>
                <i className="bi bi-house-door-fill"></i>
              </button>
              <button data-bs-dismiss="modal" className="btn-secondary btn">
                Intentar de nuevo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
