import React, { useEffect, useRef } from "react";
import { BtnBack } from "../assets/assetsHtml";
import CardFormEvent from "../components/CardFormEvent";
import Count from "../components/Count";
import useGetData from "../hooks/useGetData";
import { Modal } from "bootstrap";

function AddEvent() {
  let session = JSON.parse(sessionStorage.getItem("auth")) || false,
    id = sessionStorage.getItem("id"),
    auth = { Correo: session.Correo, Password: session.Password, id_arbol: id };

  const { data } = useGetData(`/Plantas.php?id=${id}`);

  return (
    <>
      {!session && <Example />}
      <Header />
      <BtnBack type="tm-purple" />
      <div className="d-flex justify-content-around flex-wrap m-3">
        {data && <CardFormEvent data={data} auth={auth} />}{" "}
        {data && <Count number={data.Total} />}
      </div>
    </>
  );
}

function Header() {
  return (
    <header className="hgt-100px wth-100 d-flex header-event">
      <h1 className="text-center m-auto">Nuevo evento</h1>
    </header>
  );
}

function Example() {
  let modal = useRef();

  const login = () => {
    window.location.href = "/auth";
  };

  const back = () => {
    window.history.back();
  };

  useEffect(() => {
    let myModal = new Modal(modal.current);
    myModal.show();
  }, []);

  return (
    <div
      className="modal fade"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      ref={modal}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Inicia sesión
            </h5>
          </div>
          <div className="modal-body">Para continuar identificate</div>
          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={back}
            >
              Regresar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={login}
              data-bs-dismiss="modal"
            >
              Iniciar sessión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEvent;
