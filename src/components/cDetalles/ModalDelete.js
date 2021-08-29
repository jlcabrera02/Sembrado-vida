import React from "react";
import helpHttp from "../../helpers/helpHttp";
import { ModalBody, ModalDom, ModalFooter } from "../Modals";
import { Modal } from "bootstrap";

function ModalDelete({ options, modalSuccess, modalError }) {
  const deleteDetalle = () => {
    console.log(options);
    helpHttp()
      .del("/Detalles.php", options)
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
    <ModalDom idSelect="delete" centered>
      <ModalBody>¿Estas seguro que deseas eliminar este elemento?</ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" data-bs-dismiss="modal">
          Cancelar
        </button>
        <button
          className="btn btn-secondary"
          onClick={deleteDetalle}
          data-bs-dismiss="modal"
        >
          Si
        </button>
      </ModalFooter>
    </ModalDom>
  );
}

export default ModalDelete;
