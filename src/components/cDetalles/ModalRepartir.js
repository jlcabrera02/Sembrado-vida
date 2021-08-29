import React from "react";
import helpHttp from "../../helpers/helpHttp";
import { ModalDom, ModalHeader, ModalBody } from "../Modals";
import { Modal } from "bootstrap";

function ModalRepartir({ options, modalSuccess, modalError, modal }) {
  const repartir = (e) => {
    e.preventDefault();
    e.target[1].disabled = true;

    const option = {
      headers: { ...options.headers },
      body: {
        Planta_repartida: e.target.cantidad.value,
        Fecha_repartida: e.target.fecha.value,
        ...options.body,
      },
    };

    helpHttp()
      .put("/Detalles.php", option)
      .then((res) => {
        new Modal(modalSuccess.current).show();
        modalSuccess.current.addEventListener("hidden.bs.modal", (e) =>
          window.location.reload()
        );
      })
      .catch((err) => {
        new Modal(modalError.current).show();
      });
  };

  return (
    <>
      <ModalDom idSelect="repartir" centered ref={modal}>
        <ModalHeader>
          <h5 className="text-orange">¿Cúantas plantas repartieron?</h5>
          <button
            type="button"
            className="btn btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </ModalHeader>
        <ModalBody>
          <form method="PUT" onSubmit={repartir} className="wth-50 m-auto">
            <div className="form-floating my-2">
              <input
                type="number"
                className="form-control"
                id="number"
                name="cantidad"
                placeholder="plantas"
                min="0"
                max={options ? options.body.Plantas : "2"}
                required
              />
              <label htmlFor="number">Plantas repartida</label>
            </div>
            <div className="form-floating my-2">
              <input
                type="date"
                name="fecha"
                id="fecha"
                placeholder="fecha"
                className="form-control"
                required
              />
              <label htmlFor="fecha">Fecha de reparto</label>
            </div>
            <input
              type="submit"
              value="repartir"
              data-bs-dismiss="modal"
              className="btn btn-tm-orange my-3 mx-auto d-block"
            />
          </form>
        </ModalBody>
      </ModalDom>
    </>
  );
}

export default ModalRepartir;
