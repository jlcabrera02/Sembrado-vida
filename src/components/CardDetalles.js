import React, { useState } from "react";
import Card from "./Card";
import { CircleFill } from "./Icons";
import { ModalPutMatar } from "./Modals";

export default function CardDetalles({ data }) {
  let fill = "var(--sv-purple)";
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
    id_detalle,
  } = data;
  let session = JSON.parse(sessionStorage.getItem("auth")) || false,
    auth = { Correo: session.Correo, Password: session.Password };

  const convertTime = (time) => {
    return new Date(`${time} 00:00:00`).toLocaleDateString();
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

  if (Number.parseInt(Planta_repartida) > 0) fill = "var(--sv-orange)";

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

      {session && <Button></Button>}
      <ModalPutMatar>
        <FormRepartir id={id_detalle} auth={auth}></FormRepartir>
      </ModalPutMatar>

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

function Button() {
  return (
    <button
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      className="btn btn-danger"
    >
      Matar
    </button>
  );
}

function FormMatar() {
  return (
    <form method="PUT" className="bg-danger">
      <input type="number" placeholder="¿Cuantas plantas no sobrevivieron?" />
      <input type="submit" value="Matar" />
    </form>
  );
}

function FormRepartir({ id, auth }) {
  const [idDetalle, setIdDetalle] = useState();
  setIdDetalle(id);
  const actualizar = (e) => {
    e.preventDefault();
    const options = {
      headers: { "Content-type": "application/json" },
      body: {
        id,
        Update: "Repartir",
        ...auth,
        Planta_repartida: e.target.Repartir.value,
        Fecha_repartida: e.target.Date.value,
      },
    };

    console.log(options);
  };
  return (
    <form method="PUT" onSubmit={actualizar}>
      <input
        type="number"
        name="Repartir"
        placeholder="¿Cuantas plantas repartieron por persona?"
      />
      <br />
      <input type="date" name="Date" />
      <br />
      <input type="submit" className="btn btn-danger" value="Repartir" />
    </form>
  );
}
