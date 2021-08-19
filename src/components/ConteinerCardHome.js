import React from "react";
import CardHome from "./CardHome";
import Loader from "./Loader";
import useGetData from "../hooks/useGetData";
import { TimeExpired, SinDatos } from "../assets/assetsHtml";

export default function ConteinerCardHome({ id }) {
  const { data, error, isPending, dataError } = useGetData(
    `/Data.php?id=${id}`
  );

  return (
    <>
      <div className="d-flex justify-content-evenly flex-wrap">
        {isPending && <Loader />}
        {!isPending &&
          !error &&
          data.map((el) => <CardHome key={el.id_arbol} el={el} />)}
        {!isPending && error && dataError && <SinDatos data={dataError} />}
        {!data && error && !dataError && <TimeExpired />}
      </div>
    </>
  );
}
