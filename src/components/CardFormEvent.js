import React from "react";
import FormPostEvent from "./FormPostEvent";
//import loader from "../assets/loader.svg";

function CardFormEvent({ data, auth }) {
  return (
    <div className="d-flex flex-column align-items-center">
      <figure className="d-flex">
        <img
          className="wth-100px hgt-100px border border-tm-purple rounded-circle"
          src={data.Perfil}
          alt={data.Alt}
        />
        <div className="d-flex flex-column justify-content-center">
          <h4 className="text-center m-0">{data.Planta}</h4>
          <p className="text-center m-0">
            <em>{data.Ncientifico}</em>
          </p>
          <p className="m-0">
            <span style={{ color: "var(--sv-purple)" }}>Cac: {data.Cac}</span>
          </p>
        </div>
      </figure>
      <FormPostEvent auth={auth} />
    </div>
  );
}

export default CardFormEvent;
