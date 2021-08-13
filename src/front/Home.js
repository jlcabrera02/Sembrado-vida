import React, { useState } from "react";
import { ErrorGlobal } from "../assets/assetsHtml";
import ConteinerCardHome from "../components/ConteinerCardHome";
import Header from "../components/Header";
import { InputForm } from "../components/InputForm";
import useGetData from "../hooks/useGetData";

export default function Home() {
  const [id, setId] = useState(1);
  const { data, error, isPending } = useGetData("/Cac.php");

  return (
    <>
      {!error && <Header />}
      {!error && !isPending && <InputForm data={data} setId={setId} />}
      {!error && !isPending && <ConteinerCardHome id={id} />}
      {!data && error && <ErrorGlobal msg="Sin resultados" />}
    </>
  );
}
