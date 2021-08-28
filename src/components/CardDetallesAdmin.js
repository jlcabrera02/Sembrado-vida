import React from "react";
import Card from "./Card";
import BodyCardsDetalles, { FormStatusPlanta } from "./BodyCardsDetalles";
import { CircleFill } from "./Icons";
import { time } from "../helpers/helpUtilities";

function CardDetallesAdmin({ data, handleRadio, put }) {
  let exist = Number.parseInt(data.Planta_repartida) > 0 ? "orange" : "purple";
  const setInformation = (e) => {
    const options = {
      id: data.id_detalle,
      Update: e.target.ariaLabel,
      Plantas: data.Planta_viva,
    };

    put(options);
  };

  return (
    <>
      <Card border={`tm-${exist}`}>
        <div className="d-flex justify-content-between">
          <CircleFill size="20" fill={exist} />
          <button
            className="btn text-red"
            data-bs-toggle="modal"
            data-bs-target="#delete"
            onClick={setInformation}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>

        <h2 className={`text-${exist} text-center`}>
          <span style={{ fontSize: "0.6rem" }}>Total</span>
          <br />
          {data.Planta_viva}
        </h2>

        <BodyCardsDetalles data={data} />
        <FormStatusPlanta
          fase={data.Fase}
          id={data.id_detalle}
          handleRadio={handleRadio}
        />

        <button
          className="btn btn-tm-yellow mx-auto my-1 d-block"
          data-bs-toggle="modal"
          aria-label="Matar"
          data-bs-target="#matar"
          onClick={setInformation}
        >
          Matar plantas
        </button>

        <button
          className="btn btn-tm-orange mx-auto my-1 d-block"
          aria-label="Repartir"
          onClick={setInformation}
        >
          Repartir plantas
        </button>

        <div className="text-center bg-light border rounded-pill mt-2">
          Ultima actualización:
          <br />
          <span className={`text-${exist}`}>
            hace {time(data.Ultima_actualizacion)}
          </span>
          <br />
          <span className="text-danger">{data.Cac}</span>
        </div>
      </Card>
    </>
  );
}

export default CardDetallesAdmin;
