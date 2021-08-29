import React, { useState } from "react";
import useGetData from "../hooks/useGetData";
import usePostData from "../hooks/usePostData";
import loader from "../assets/loader.svg";

function FormPostEvent({ auth }) {
  const [form, setForm] = useState({});
  const post = usePostData(form);

  const addDetalle = (e) => {
    e.preventDefault();
    setForm({
      url: "/Detalles.php",
      options: {
        headers: { "Content-type": "application/json" },
        body: {
          ...auth,
          Fecha_siembra: e.target.Fecha.value,
          Planta_sembrada: e.target.Plantas.value,
          Vivero: e.target.Viv.value,
        },
      },
    });
  };

  return (
    <>
      <form method="POST" className="wth-90" onSubmit={addDetalle}>
        <BodyForm post={post} />
      </form>
    </>
  );
}

function BodyForm({ post }) {
  const [viv, setViv] = useState("siembra");

  const { data, error, isPending } = post;

  return (
    <>
      <Planta />
      <Vivero set={setViv} />
      <Fecha viv={viv} />
      <BtnSubmit isPending={isPending} error={error} />
      {error && !isPending && (
        <p className="text-red text-center">Error al insetar los datos</p>
      )}
      {error && !isPending && (
        <button
          className="btn btn-primary d-block mx-auto"
          onClick={(e) => window.location.reload()}
        >
          Intentar de nuevo
        </button>
      )}
      {data && !isPending && (
        <p className="text-green text-center">Planta agregada correctamente</p>
      )}
    </>
  );
}

function Planta() {
  return (
    <>
      <label htmlFor="Planta">Numero de plantas</label>
      <div>
        <input
          className="form-control"
          id="Planta"
          type="number"
          name="Plantas"
          placeholder="Digite las plantas sembradas"
          min="10"
          max="3000"
          required
        />
      </div>
    </>
  );
}

function Vivero({ set }) {
  const { data, error, isPending } = useGetData("/Vivero.php");

  const handleSelect = (e) =>
    e.target.value === "2" ? set("entrega") : set("siembra");

  return (
    <>
      <label htmlFor="Viv">Tipo de vivero</label>
      <div>
        <select
          className="form-control"
          name="Viv"
          id="Viv"
          onClick={handleSelect}
          required
        >
          {data && !isPending && (
            <option value="">--- Elige le Tipo de vivero ---</option>
          )}
          {isPending && <option value="">Cargando ... </option>}
          {data &&
            !isPending &&
            data.map((el) => (
              <option value={el.id_vivero} key={el.id_vivero}>
                {el.Tipo}
              </option>
            ))}
          {error && !isPending && (
            <option value="">Error al cargar los viveros</option>
          )}
        </select>
      </div>
    </>
  );
}

function Fecha({ viv }) {
  return (
    <>
      <label htmlFor="Fecha">Fecha de {viv}</label>
      <div>
        <input
          className="form-control"
          type="date"
          name="Fecha"
          id="Fecha"
          min="2018-10-08"
          max={new Date().toISOString().split("T")[0]}
          placeholder="fecha"
          required
        />
      </div>
    </>
  );
}

function BtnSubmit({ isPending, error }) {
  return (
    <>
      <button
        type="submit"
        className="mx-auto btn btn-tm-purple my-3 wth-80 d-block"
        name="Submit"
        disabled={isPending || error}
      >
        {isPending ? <img src={loader} alt="Cargando..." /> : "Agregar"}
      </button>
    </>
  );
}
export default FormPostEvent;
