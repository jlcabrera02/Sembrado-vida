import React, { useState } from "react";
import CardDetalles from "./CardDetalles";
import { SinDatos } from "../assets/assetsHtml";
import helpAuth from "../helpers/helpAuth";
import useGetData from "../hooks/useGetData";
import Loader from "./Loader";
import CardDetallesAdmin from "./CardDetallesAdmin";

export default function ConteinerCardDetalles({ id, vivero }) {
  const [formBody, setFormBody] = useState({});
  const { data, error, isPending, dataError } = useGetData(
    `/Detalles.php?id=${id}${vivero}`
  );

  const clickBtn = () => {
    window.location.href = "/asignar-planta";
  };

  let auth = helpAuth();

  console.log(formBody);

  const handleRadio = (id) => {
    console.log("cambio a " + id);
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
              setFormBody={setFormBody}
              auth={auth}
              handleRadio={handleRadio}
            />
          ))}
      </div>
    </>
  );
}
