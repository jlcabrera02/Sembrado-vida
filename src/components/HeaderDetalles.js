import React from "react";
import perfil from "../assets/arbolDefault.svg";

export default function HeaderDetalles({ data }) {
  const img = {
    width: "95%",
    heigth: "95%",
    borderRadius: "50%",
    margin: "auto",
  };

  return (
    <>
      <header className="cabecera-detalle d-flex justify-content-center align-items-center">
        <div className="d-flex img-planta">
          <img src={perfil} alt={data.Perfil} style={img} />
        </div>
      </header>
    </>
  );
}
