import React, { useState } from "react";
import Card from "./Card";
import { CircleFill } from "./Icons";
import { ModalPutMatar } from "./Modals";

/* export default function CardDetalles({ data }) {
  const [state] = useState(data.id_detalle);

  let fill = "var(--sv-purple)";

  let session = JSON.parse(sessionStorage.getItem("auth")) || false,
    auth = { Correo: session.Correo, Password: session.Password };

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

  if (Number.parseInt(data.Planta_repartida) > 0) fill = "var(--sv-orange)";

  return (
    <Card borderColor={fill}>
      <CircleFill size="20" fill={fill} />
      <h2 className="text-center" style={{ color: fill }}>
        {data.Planta_viva}
      </h2>

      <Body data={data} />

      <p className="text-center">
        Ultima Actualización: <br />{" "}
        <em style={{ color: fill }}>hace {time(data.Ultima_actualizacion)}</em>
      </p>

      <p className="text-center" style={{ color: "var(--sv-red)" }}>
        {data.Cac}
      </p>
    </Card>
  );
}

function Body({ data }) {
  const {
    Planta_viva,
    Tipo,
    Planta_sembrada,
    Planta_muerta,
    Planta_repartida,
    Fecha_siembra,
    Fecha_repartida,
    //Cac,
    //Planta,
    //Ultima_actualizacion,
    //id_detalle,
  } = data;

  const convertTime = (time) => {
    return new Date(`${time} 00:00:00`).toLocaleDateString();
  };

  return (
    <>
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
    </>
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
}; */

function CardDetalles({ data }) {
  let option = Number.parseInt(data.Planta_repartida) > 0 ? "orange" : "purple";

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

  const deleteDe = () => {
    window.confirm("¿Estas seguro que quieres eliminar este elemento?");
  };

  return (
    <>
      <Card border={`tm-${option}`}>
        <div className="d-flex justify-content-between">
          <CircleFill size="20" fill={option} />
          <button className={`btn btn-danger`} onClick={deleteDe}>
            <i className="bi bi-trash"></i>
          </button>
        </div>

        <h2 className={`text-${option} text-center`}>{data.Planta_viva}</h2>

        <Body data={data} />

        <div className="text-center bg-light border rounded-pill mt-2">
          Ultima actualización:
          <br />
          <span className={`text-${option}`}>
            hace {time(data.Ultima_actualizacion)}
          </span>
        </div>
      </Card>
    </>
  );
}

function Body({ data }) {
  return (
    <>
      <p className="m-0">
        Vivero: <span className="text-blue">{data.Tipo}</span>
      </p>

      <p className="m-0">
        Plantas {data.Tipo === "Comunitario" ? "sembradas" : "entregadas"}:{" "}
        <span className="text-green">{data.Planta_sembrada}</span>
      </p>

      <p className="m-0">
        Plantas Muertas:{" "}
        <span className="text-yellow">{data.Planta_muerta}</span>
      </p>

      <p className="m-0">
        Planta Repartida:{" "}
        <span className="text-orange">{data.Planta_repartida}</span>
      </p>

      <p className="m-0">
        Fecha de {data.Tipo === "Comunitario" ? "siembra" : "entrega"}:{" "}
        <span className="text-green">
          {new Date(`${data.Fecha_siembra} 00:00:00`).toLocaleDateString()}
        </span>
      </p>

      <p className="m-0">
        Fecha de reparto:{" "}
        {data.Fecha_repartida && (
          <span className="text-green">
            {new Date(`${data.Fecha_repartida} 00:00:00`).toLocaleDateString()}
          </span>
        )}
        {!data.Fecha_repartida && (
          <span className="text-yellow">En espera ...</span>
        )}
      </p>
    </>
  );
}

export default CardDetalles;
