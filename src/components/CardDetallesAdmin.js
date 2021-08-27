import React from "react";
import Card from "./Card";
import BodyCardsDetalles, { FormStatusPlanta } from "./BodyCardsDetalles";
import { CircleFill } from "./Icons";
import { time } from "../helpers/helpUtilities";

function CardDetallesAdmin({ data, setFormBody, handleRadio }) {
  let option = Number.parseInt(data.Planta_repartida) > 0 ? "orange" : "purple";

  const matarPlanta = () => {
    setFormBody({
      id: data.id_detalle,
      Update: "Matar",
    });
  };
  const repartirPlanta = () => {
    setFormBody({
      id: data.id_detalle,
      Update: "Repartir",
    });
  };

  return (
    <>
      <Card border={`tm-${option}`}>
        <div className="d-flex justify-content-between">
          <CircleFill size="20" fill={option} />
          <button className="btn text-red">
            <i className="bi bi-trash"></i>
          </button>
        </div>

        <h2 className={`text-${option} text-center`}>{data.Planta_viva}</h2>

        <FormStatusPlanta
          fase={data.Fase}
          id={data.id_detalle}
          handleRadio={handleRadio}
        />

        <BodyCardsDetalles data={data} />

        <button
          className="btn btn-tm-yellow mx-auto my-1 d-block"
          onClick={matarPlanta}
        >
          Matar plantas
        </button>
        <button
          className="btn btn-tm-orange mx-auto my-1 d-block"
          onClick={repartirPlanta}
        >
          Repartir plantas
        </button>

        <div className="text-center bg-light border rounded-pill mt-2">
          Ultima actualización:
          <br />
          <span className={`text-${option}`}>
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
