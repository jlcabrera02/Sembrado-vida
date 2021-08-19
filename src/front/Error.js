import React from "react";
import err from "../assets/logofail.svg";
import Carrusel from "../components/Carrusel";

function Error() {
  return (
    <>
      <div className="wth-100 wth-max-700px m-auto">
        <Carrusel />
        <h2 className="text-center my-2">
          Página no encontrada <br />
          <button
            onClick={(e) => (window.location.href = "/")}
            type="button"
            className="btn btn-success"
          >
            <i className="bi bi-house-fill"></i> Home
          </button>
        </h2>
        <img src={err} alt="fail page" />
      </div>
    </>
  );
}

export default Error;
