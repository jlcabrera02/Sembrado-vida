import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "../Modals";
import usePutData from "../../hooks/usePutData";

function ModalMatar({ options }) {
  const [form, setForm] = useState({});
  const matar = (e) => {
    e.preventDefault();

    const myObject = {
      headers: { ...options.headers },
      body: {
        Planta_muerta: e.target.cantidad.value,
        ...options.body,
      },
    };

    setForm(myObject);
  };

  const { data, error, isPending } = usePutData("/Detalles.php", form);
  //console.log(data, error, isPending);

  if (data && !error & !isPending) {
    console.log("Perfecto");
  }

  return (
    <Modal idSelect="matar" centered>
      <ModalHeader>
        <h5 className="text-center text-red">
          ¿Cúantas plantas no sobrevivieron?
        </h5>
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
            />
            <label htmlFor="number">Plantas Muertas</label>
          </div>
          <input
            type="submit"
            value="matar"
            className="btn btn-warning my-3 mx-auto d-block"
          />
        </form>
      </ModalBody>
    </Modal>
  );
}

export default ModalMatar;
