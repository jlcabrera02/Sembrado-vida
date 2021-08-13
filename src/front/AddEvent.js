import React from "react";

function AddEvent() {
  let session = JSON.parse(sessionStorage.getItem("auth"));
  console.log(session);

  return (
    <>
      {!session && <h2>hola</h2>}
      {session && <h2>Bienvenido {session.Nombre} </h2>}
    </>
  );
}

export default AddEvent;
