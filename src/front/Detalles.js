import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ErrorGlobal } from "../assets/assetsHtml";
import DetallesMenu from "../components/DetallesMenu";
import HeaderDetalles from "../components/HeaderDetalles";
import ConteinerCardDetalles from "../components/ConteinerCardDetalles";
import useGetData from "../hooks/useGetData";

export default function Detalles() {
  const [typeVivero, setTypeVivero] = useState("");
  let { plantaId } = useParams();

  const { data, error, isPending } = useGetData(`/Plantas.php?id=${plantaId}`);

  return (
    <>
      {data && !isPending && <HeaderDetalles data={data[0]} />}
      {data && !isPending && (
        <DetallesMenu data={data[0]} setTypeVivero={setTypeVivero} />
      )}
      {data && !isPending && (
        <ConteinerCardDetalles id={plantaId} vivero={typeVivero} />
      )}
      {error && !isPending && (
        <ErrorGlobal msg="No me pude conectar con el servidor 😟" />
      )}
    </>
  );
}
