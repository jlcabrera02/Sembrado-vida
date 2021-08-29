import React, { useState } from "react";
import CardDetalles from "./CardDetalles";
import { SinDatos } from "../assets/assetsHtml";
import helpAuth from "../helpers/helpAuth";
import useGetData from "../hooks/useGetData";
import Loader from "./Loader";
import CardDetallesAdmin from "./CardDetallesAdmin";
import helpHttp from "../helpers/helpHttp";
import ModalIndex from "./cDetalles/ModalIndex";

export default function ConteinerCardDetalles({ id, vivero }) {
  const [options, setOptions] = useState(null);
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
              handleRadio={handleRadio}
              auth={authCredencials}
              setOptions={setOptions}
            />
          ))}
      </div>
      {/*Modals lanza un modal deacuerdo al boton que ejecute*/}
      <ModalIndex options={options} />
    </>
  );
}
