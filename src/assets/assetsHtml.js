import React from "react";
import Card from "../components/Card";
import { ArrowLeftCircleFill, IconX, Reloj } from "../components/Icons";
import Error from "./Error.svg";

export function BtnBack({ type }) {
  const btnAction = (e) => {
    window.history.back();
  };

  return (
    <button
      className={`btn btn-${type} p-0 rounded-circle m-2`}
      onClick={btnAction}
    >
      <ArrowLeftCircleFill fill="white" />
    </button>
  );
}

export function ErrorGlobal({ msg }) {
  return (
    <>
      <h3 className="text-center mt-5">{msg}</h3>
      <img src={Error} alt="Error page" className="error-404 mx-auto d-block" />
      <button
        onClick={(e) => window.location.reload()}
        type="button"
        className="btn btn-info mx-auto d-block my-3"
      >
        <i className="bi bi-arrow-clockwise"></i> Recargar
      </button>
    </>
  );
}

export function OptionHtml({ value, body }) {
  return <option value={value}>{body}</option>;
}

export function SinDatos({ data }) {
  return (
    <Card>
      <h2 className="text-center">
        {data.status}:
        <span style={{ color: "var(--sv-orange)" }}>
          {" "}
          {data.result.error_id}
        </span>
      </h2>
      <p className="text-center">{data.result.error_msg}</p>
      <IconX center />
    </Card>
  );
}

export function TimeExpired() {
  return (
    <div className="d-flex justify-content-around align-items-center w-90 flex-wrap fw-bold">
      <p className="text-center fs-5 text-wrap">
        El tiempo de espera a caducado, por favor intente de nuevo
      </p>

      <Reloj />
    </div>
  );
}

SinDatos.defaultProps = {
  data: {
    status: "Error",
    result: {
      error_id: 400,
      error_msg: "Error al encontrar los datos",
    },
  },
};
