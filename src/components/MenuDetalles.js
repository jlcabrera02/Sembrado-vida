import React from "react";
import Pointing from "./Pointing";
import { InputFormDetalle } from "./InputForm";
import { BtnBack } from "../assets/assetsHtml";

function MenuDetalles({ data, setTypeVivero }) {
  return (
    <div className="header-detalles-nav mt-2">
      <div className="d-flex align-items-center">
        <BtnBack type="success" />
      </div>

      <div className="d-flex flex-column justify-content-evenly">
        <h2 className="text-center m-0">{data.Planta}</h2>
        <p className="text-center m-0">{data.Ncientifico}</p>
        <InputFormDetalle setTypeVivero={setTypeVivero} />
      </div>

      <div className="d-flex justify-content-center">
        <Pointing />
      </div>
    </div>
  );
}

export default MenuDetalles;
