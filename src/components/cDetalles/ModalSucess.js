import React from "react";
import { ModalDom, ModalBody } from "../Modals";

function ModalSucess({ modalSuccess }) {
  return (
    <ModalDom ref={modalSuccess} centered>
      <ModalBody>
        <h3 className="text-green text-center">Todo Correcto</h3>
        <span
          className="text-green text-center d-block"
          style={{ fontSize: "5rem" }}
        >
          <i className="bi bi-check2-circle"></i>
        </span>
        <button
          type="button"
          className="btn btn-primary mx-auto d-block"
          data-bs-dismiss="modal"
        >
          Ok
        </button>
      </ModalBody>
    </ModalDom>
  );
}

export default ModalSucess;
