import React from "react";

export default function HeaderDetalles({ data }) {
  return (
    <>
      <header className="cabecera-detalle d-flex justify-content-center align-items-center">
        <div className="d-flex img-planta">
          <img
            src={data.Perfil}
            alt={data.Alt}
            style={{ objectFit: "cover" }}
            className="wth-100 hgt-100 rounded-circle mx-auto"
          />
        </div>
      </header>
    </>
  );
}
