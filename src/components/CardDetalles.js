import React from "react";
import Card from "./Card";
import BodyCardsDetalles, { EstatusPlanta } from "./BodyCardsDetalles";
import { time } from "../helpers/helpUtilities";
import { CircleFill } from "./Icons";

function CardDetalles({ data }) {
  let exist = Number.parseInt(data.Planta_repartida) > 0 ? "orange" : "purple";

  return (
    <>
      <Card border={`tm-${exist}`}>
        <CircleFill size="20" fill={exist} />

        <h2 className={`text-${exist} text-center`}>
          <span style={{ fontSize: "0.6rem" }}>Total</span>
          <br />
          {data.Planta_viva}
        </h2>

        <BodyCardsDetalles data={data} />
        <EstatusPlanta fase={data.Fase} />

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

export default CardDetalles;
