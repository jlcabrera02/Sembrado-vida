import React, { useRef } from "react";
import ModalDelete from "./ModalDelete";
import ModalError from "./ModalError";
import ModalMatar from "./ModalMatar";
import ModalRepartir from "./ModalRepartir";
import ModalSucess from "./ModalSucess";

function ModalIndex({ options }) {
  let modalError = useRef();
  let modalSuccess = useRef();
  let modal = useRef();

  return (
    <>
      <ModalSucess modalSuccess={modalSuccess} />
      <ModalError modalError={modalError} />
      <ModalRepartir
        options={options}
        modal={modal}
        modalSuccess={modalSuccess}
        modalError={modalError}
      />
      <ModalMatar
        options={options}
        modal={modal}
        modalSuccess={modalSuccess}
        modalError={modalError}
      />
      <ModalDelete
        options={options}
        modalSuccess={modalSuccess}
        modalError={modalError}
      />
    </>
  );
}

export default ModalIndex;
