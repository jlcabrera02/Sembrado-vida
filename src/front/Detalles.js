import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ErrorGlobal } from "../assets/assetsHtml";
import DetallesMenu from "../components/DetallesMenu";
import HeaderDetalles from "../components/HeaderDetalles";
import ConteinerCardDetalles from "../components/ConteinerCardDetalles";
import useGetData from "../hooks/useGetData";

/* export default function Detalles() {
  let { plantaId } = useParams();

  //let ventana = window.innerWidth < 600;

  const { data, error, isPending } = useGetData(
    `/DetallePlanta.php?id=${plantaId}`
  );

  //console.log(data, error, isPending);
  return (
    <>
      {!error && !isPending && <HeaderDetalles data={data} />}
      {ventana && (
        <a href="/">
          <ArrowLeftCircleFill fill="var(--c-blue)" />
        </a>
      )}
      <HandleWindow />
      {!error && !isPending && <DetallesMenu datos={data} />}
      {!error && !loader && <ConteinerCardDetalles data={dataBody} />}
    </>
  );
} */

export default function Detalles() {
  const [typeVivero, setTypeVivero] = useState("");
  let { plantaId } = useParams();

  const { data, error, isPending } = useGetData(
    `/DetallePlanta.php?id=${plantaId}`
  );

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
