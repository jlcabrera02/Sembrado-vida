import React, { useState } from "react";
import CardDetalles from "./CardDetalles";
import { SinDatos } from "../assets/assetsHtml";
import helpAuth from "../helpers/helpAuth";
import useGetData from "../hooks/useGetData";
import Loader from "./Loader";
import CardDetallesAdmin from "./CardDetallesAdmin";
import helpHttp from "../helpers/helpHttp";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "./Modals";
import usePutData from "../hooks/usePutData";

export default function ConteinerCardDetalles({ id, vivero }) {
  const [options, setOptions] = useState({});
  const { data, error, isPending, dataError } = useGetData(
    `/Detalles.php?id=${id}${vivero}`
  );

  const clickBtn = () => {
    window.location.href = "/asignar-planta";
  };

  let auth = helpAuth(),
    authCredencials = { Correo: auth.Correo, Password: auth.Password };

  const handleRadio = (id, Fase) => {
    const optionsRadio = {
      headers: { "Content-type": "application/json" },
      body: {
        ...authCredencials,
        id,
        Fase,
        Update: "Status",
      },
    };

    helpHttp()
      .put("/Detalles.php", optionsRadio)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const put = (data) => {
    setOptions({
      headers: { "Content-type": "application/json" },
      body: { ...data, ...authCredencials },
    });
  };

  return (
    <>
      <button className="m-auto d-block my-4 add-event p-1" onClick={clickBtn}>
        <i className="bi bi-plus-circle-dotted"></i>{" "}
        <span>Agregar un nuevo evento</span>
      </button>
      <div className="d-flex justify-content-evenly flex-wrap">
        {isPending && <Loader />}
        {error && !isPending && dataError && <SinDatos data={dataError} />}
        {!auth &&
          !error &&
          !isPending &&
          data.map((el) => <CardDetalles data={el} key={el.id_detalle} />)}
        {auth &&
          !error &&
          !isPending &&
          data.map((el) => (
            <CardDetallesAdmin
              data={el}
              key={el.id_detalle}
              auth={auth}
              handleRadio={handleRadio}
              put={put}
            />
          ))}
      </div>
      {/*Modals*/}
      <ModalMatar options={options} />
      <ModalDelete />
    </>
  );
}

function ModalMatar({ options }) {
  const matar = (e) => {
    e.preventDefault();

    const myObject = {
      headers: { ...options.headers },
      body: {
        cantidad: e.target.cantidad.value,
        ...options.body,
      },
    };

    console.log(myObject);
  };

  const { data, error, isPending } = usePutData("/Detalles.php", options);
  console.log(data);

  return (
    <Modal idSelect="matar" centered>
      <ModalHeader>
        <h2 className="text-center">Plantas muertas</h2>
        <button
          type="button"
          className="btn btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          close
        </button>
      </ModalHeader>
      <ModalBody>
        <form method="PUT" onSubmit={matar}>
          <label>¿Cuantas plantas no sobrevivieron?</label>
          <input type="number" min="1" max="10" name="cantidad" />
          <input type="submit" value="matar" />
        </form>
      </ModalBody>
      <ModalFooter>
        <button>cerrar</button>
      </ModalFooter>
    </Modal>
  );
}

function ModalDelete() {
  return (
    <Modal idSelect="delete" centered>
      <ModalBody>¿Estas seguro que deseas eliminar este elemento?</ModalBody>
      <ModalFooter>
        <button className="btn btn-primary">Cancelar</button>
        <button className="btn btn-secondary">Si</button>
      </ModalFooter>
    </Modal>
  );
}
