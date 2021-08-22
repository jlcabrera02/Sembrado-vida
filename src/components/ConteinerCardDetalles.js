import React from "react";
import CardDetalles from "./CardDetalles";
import { SinDatos } from "../assets/assetsHtml";
import { useHistory } from "react-router";
import useGetData from "../hooks/useGetData";
import Loader from "./Loader";

export default function ConteinerCardDetalles({ id, vivero }) {
  let history = useHistory();
  const { data, error, isPending, dataError } = useGetData(
    `/Detalles.php?id=${id}${vivero}`
  );

  const clickBtn = () => {
    history.push("/asignar-planta");
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
        {!error &&
          !isPending &&
          data.map((el) => <CardDetalles data={el} key={el.id_detalle} />)}
      </div>
    </>
  );
}
