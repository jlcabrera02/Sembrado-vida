import React from "react";
import { ModalDom, ModalBody } from "../Modals";

function ModalError({ modalError }) {
  return (
    <ModalDom ref={modalError} centered>
      <ModalBody>
        <h3 className="text-red text-center">Error</h3>
        <span
          className="text-red text-center d-block"
          style={{ fontSize: "5rem" }}
        >
          <i className="bi bi-x-lg"></i>
        </span>
        <button
          type="button"
          className="btn btn-danger mx-auto d-block"
          data-bs-dismiss="modal"
        >
          Ok
        </button>
      </ModalBody>
    </ModalDom>
  );
}

export default ModalError;
