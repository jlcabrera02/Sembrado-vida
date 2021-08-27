import { useEffect, useRef } from "react";
import { CircleFill } from "./Icons";

function BodyCardsDetalles({ data }) {
  const {
    Tipo,
    Planta_sembrada,
    Planta_muerta,
    Planta_repartida,
    Fecha_siembra,
    Fecha_repartida,
  } = data;
  return (
    <>
      <p className="m-0">
        Vivero: <span className="text-blue">{Tipo}</span>
      </p>

      <p className="m-0">
        Plantas {Tipo === "Comunitario" ? "sembradas" : "entregadas"}:{" "}
        <span className="text-green">{Planta_sembrada}</span>
      </p>

      <p className="m-0">
        Plantas Muertas: <span className="text-yellow">{Planta_muerta}</span>
      </p>

      <p className="m-0">
        Planta Repartida:{" "}
        <span className="text-orange">{Planta_repartida}</span>
      </p>

      <p className="m-0">
        Fecha de {Tipo === "Comunitario" ? "siembra" : "entrega"}:{" "}
        <span className="text-green">
          {new Date(`${Fecha_siembra} 00:00:00`).toLocaleDateString()}
        </span>
      </p>

      <p className="m-0">
        Fecha de reparto:{" "}
        {Fecha_repartida && (
          <span className="text-green">
            {new Date(`${Fecha_repartida} 00:00:00`).toLocaleDateString()}
          </span>
        )}
        {!Fecha_repartida && <span className="text-yellow">En espera ...</span>}
      </p>
    </>
  );
}

export function EstatusPlanta({ fase }) {
  let fasec = fase === "0" ? true : false;
  const faseColor = {
    true: "green",
    false: "gray",
  };

  return (
    <div>
      <p className="text-green-700 text-center m-0">Estatus</p>
      <div className="d-flex justify-content-evenly">
        <div className="d-flex flex-column align-items-center">
          <span className={`text-${faseColor[fasec]}`}>semilla</span>
          <CircleFill size="10" fill={faseColor[fasec]} />
        </div>
        <div className="d-flex flex-column align-items-center">
          <span className={`text-${faseColor[!fasec]}`}>planta</span>
          <CircleFill size="10" fill={faseColor[!fasec]} />
        </div>
      </div>
    </div>
  );
}

export function FormStatusPlanta({ fase, id, handleRadio }) {
  let formu = useRef();

  useEffect(() => {
    formu.current.statusPlanta[Number.parseInt(fase)].setAttribute(
      "checked",
      ""
    );
  }, [fase]);

  const handleLocaleRadio = () => {
    handleRadio(id);
  };

  return (
    <form method="PUT" ref={formu}>
      <p className="text-green-700 text-center m-0">Estatus</p>
      <div className="d-flex justify-content-evenly">
        <div className="d-flex flex-column align-items-center">
          <label>Semilla</label>
          <input
            type="radio"
            name="statusPlanta"
            value="0"
            onChange={handleRadio}
          />
        </div>
        <div className="d-flex flex-column align-items-center">
          <label>Planta</label>
          <input
            type="radio"
            name="statusPlanta"
            value="1"
            onChange={handleLocaleRadio}
          />
        </div>
      </div>
    </form>
  );
}

export default BodyCardsDetalles;
