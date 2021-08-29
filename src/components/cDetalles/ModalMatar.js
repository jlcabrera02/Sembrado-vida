import React from "react";
import helpHttp from "../../helpers/helpHttp";
/* import ModalSucess from "./ModalSucess";
import ModalError from "./ModalError"; */
import { ModalDom, ModalHeader, ModalBody } from "../Modals";
import { Modal } from "bootstrap";

function ModalMatar({ options, modal, modalError, modalSuccess }) {
  const matar = (e) => {
    e.preventDefault();
    e.target[1].disabled = true;

    const option = {
      headers: { ...options.headers },
      body: {
        Planta_muerta: e.target.cantidad.value,
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
      .catch(() => {
        new Modal(modalError.current).show();
      });
  };

  return (
    <>
      <ModalDom idSelect="matar" centered ref={modal}>
        <ModalHeader>
          <h5 className="text-yellow">¿Cúantas plantas no sobrevivieron?</h5>
          <button
            type="button"
            className="btn btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </ModalHeader>
        <ModalBody>
          <form method="PUT" onSubmit={matar} className="wth-50 m-auto">
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                id="number"
                name="cantidad"
                placeholder="plantas"
                min="0"
                max={options ? options.body.Plantas : "2"}
              />
              <label htmlFor="number">Plantas Muertas</label>
            </div>
            <input
              type="submit"
              value="matar"
              data-bs-dismiss="modal"
              className="btn btn-warning my-3 mx-auto d-block"
            />
          </form>
        </ModalBody>
      </ModalDom>
    </>
  );
}

export default ModalMatar;
