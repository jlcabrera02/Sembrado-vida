import React from "react";
import Card from "./Card";

export default function CardHome({ el }) {
  const contador = {
    color: "var(--sv-green)",
    fontSize: "2em",
    fontFamily: "Cagliostro",
  };

  const clickBtn = () => {
    window.location.href = `/detalles-${el.id_arbol}`;
  };

  return (
    <>
      <Card>
        <img
          src={el.Perfil}
          alt={el.Alt}
          className="mx-auto my-1 d-block rounded-circle w-50"
        />
        <h5 className="text-center m-0 p-0">{el.Planta}</h5>
        <h6 className="text-center m-0 p-0">{el.Ncientifico}</h6>
        <figcaption className="text-center m-3">Total de plantas</figcaption>
        <p className="text-center">
          <span style={contador}>{el.Total}</span>
        </p>
        <button onClick={clickBtn} className="d-block mx-auto my-1 detalle-btn">
          Detalles
        </button>
      </Card>
    </>
  );
}
