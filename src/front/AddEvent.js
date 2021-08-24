import React from "react";
import { BtnBack } from "../assets/assetsHtml";
import CardFormEvent from "../components/CardFormEvent";
import Count from "../components/Count";
import useGetData from "../hooks/useGetData";

function AddEvent() {
  let session = JSON.parse(sessionStorage.getItem("auth")) || false,
    id = sessionStorage.getItem("id"),
    auth = { Correo: session.Correo, Password: session.Password, id_arbol: id };

  const { data } = useGetData(`/Plantas.php?id=${id}`);

  const click = () => (window.location.href = "./auth");

  return (
    <>
      {!session && (
        <>
          <p>
            Para continuar necesitas estar autenticado, ¿Quieres iniciar sesión?
          </p>
          <button className="btn btn-primary" onClick={click}>
            Iniciar sesión
          </button>
        </>
      )}
      <Header />
      <BtnBack type="info" />
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

export default AddEvent;
