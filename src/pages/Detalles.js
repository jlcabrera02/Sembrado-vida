import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BtnBack, SinDatos } from "../assets/assetsHtml";
import MenuDetalles from "../components/MenuDetalles";
import HeaderDetalles from "../components/HeaderDetalles";
import ConteinerCardDetalles from "../components/ConteinerCardDetalles";
import useGetData from "../hooks/useGetData";

export default function Detalles() {
  const [typeVivero, setTypeVivero] = useState("");
  let { plantaId } = useParams();

  const { data, error, isPending, dataError } = useGetData(
    `/Plantas.php?id=${plantaId}`
  );

  if (data && !error) {
    sessionStorage.setItem("id", plantaId);
  } else {
    sessionStorage.removeItem("id");
  }

  return (
    <>
      {data && !isPending && <HeaderDetalles data={data} />}
      {data && !isPending && (
        <MenuDetalles data={data} setTypeVivero={setTypeVivero} />
      )}
      {data && !isPending && (
        <ConteinerCardDetalles id={plantaId} vivero={typeVivero} />
      )}
      {error && !isPending && dataError && (
        <>
          <BtnBack type="danger" />
          <div className="d-flex wth-100 my-5 justify-content-center">
            <SinDatos data={dataError} />
          </div>
        </>
      )}
    </>
  );
}
