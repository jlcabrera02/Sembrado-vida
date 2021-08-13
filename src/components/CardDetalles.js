import React from "react";
import Card from "./Card";
import { CircleFill } from "./Icons";

export default function CardDetalles({ data, fill }) {
  const {
    Planta_viva,
    Tipo,
    Planta_sembrada,
    Planta_muerta,
    Planta_repartida,
    Fecha_siembra,
    Fecha_repartida,
    Cac,
    //Planta,
    Ultima_actualizacion,
    //id_detalle,
  } = data;
  const convertTime = (time) => {
    return new Date(`${time} `).toLocaleDateString();
  };

  const time = (date) => {
    let dateNow = new Date().getTime();
    let dateEvent = new Date(date).getTime();
    let timeProcess = dateNow - dateEvent,
      days = Math.floor(timeProcess / (1000 * 60 * 60 * 24)),
      hours = Math.floor(
        (timeProcess % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes = Math.floor((timeProcess % (1000 * 60 * 60)) / (1000 * 60)),
      week = Math.floor(timeProcess / (1000 * 60 * 60 * 24 * 7));

    if (week > 4) {
      return "más de un mes";
    } else {
      if (week > 0) {
        let re = week === 1 ? `${week} semana` : `${week} semanas`;
        return re;
      } else {
        if (days > 0) {
          let re = days === 1 ? `${days} dia` : `${days} dias`;
          return re;
        } else {
          if (hours > 0) {
            let re = hours === 1 ? `${hours} hora` : `${hours} horas`;
            return re;
          } else {
            let re = minutes === 1 ? `${minutes} minuto` : `${minutes} minutos`;
            return re;
          }
        }
      }
    }
  };

  return (
    <Card borderColor={fill}>
      <CircleFill size="20" fill={fill} />
      <h2 className="text-center" style={{ color: fill }}>
        {Planta_viva}
      </h2>

      <P color="blue" value="Vivero: ">
        {Tipo}
      </P>

      <P value="Plantas sembradas: ">{Planta_sembrada}</P>

      <P color="yellow" value="Plantas muertas: ">
        {Planta_muerta}
      </P>

      <P color="orange" value="Planta repartida: ">
        {Planta_repartida}
      </P>

      {Tipo === "Militar" ? (
        <P value="Fecha de entrega: ">{convertTime(Fecha_siembra)}</P>
      ) : (
        <P value="Fecha de siembra: ">{convertTime(Fecha_siembra)}</P>
      )}

      {Fecha_repartida && (
        <P value="Fecha de reparto: ">{convertTime(Fecha_repartida)}</P>
      )}
      {!Fecha_repartida && <br />}

      <p className="text-center">
        Ultima Actualización: <br />{" "}
        <em style={{ color: fill }}>hace {time(Ultima_actualizacion)}</em>
      </p>

      <p className="text-center" style={{ color: "var(--sv-red)" }}>
        {Cac}
      </p>
    </Card>
  );
}

function P({ color, children, value }) {
  const style = {
    color: `var(--sv-${color})`,
  };

  return (
    <p className="m-0">
      {value}
      <span style={style}>{children}</span>
    </p>
  );
}

P.defaultProps = {
  color: "green",
};

CardDetalles.defaultProps = {
  fill: "var(--sv-purple)",
};
