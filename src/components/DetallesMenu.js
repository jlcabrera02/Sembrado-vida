import React from "react";
import Pointing from "./Pointing";
import { ArrowLeftCircleFill } from "./Icons";
import { InputFormDetalle } from "./InputForm";

/* export default function DetallesMenu({ datos }) {
  let ventana = window.innerWidth > 600;
  let responsive = ventana
    ? "d-flex justify-content-between "
    : "d-flex flex-column";

  const icon = {
    width: "150px",
    marginRight: "70px",
    marginLeft: "70px",
  };

  const { data, error, isPending } = useGetData("/vivero.php");
  console.log(data, error, isPending);

  const handleChange = (e) => {
    console.log("anada");
  };

  return (
    <>
      <div className={responsive}>
        {ventana && (
          <div style={icon}>
            <a href="/">
              <ArrowLeftCircleFill fill="var(--c-blue)" />
            </a>
          </div>
        )}
        <HandleWindow />
        <div>
          <h1 className="text-center">{datos.Planta}</h1>
          <p className="text-center">{datos.Ncientifico}</p>
          <article className="d-flex justify-content-center m-3">
            <form className="viv-form">
              <select
                className="text-center"
                name="vivero"
                id="vivero"
                onChange={handleChange}
              >
                {!error && !isPending && <option value="0">Todo</option>}
                {data &&
                  !error &&
                  !isPending &&
                  data.map((el) => (
                    <OptionHtml
                      key={el.id_vivero}
                      value={el.id_vivero}
                      body={el.Tipo}
                    />
                  ))}
              </select>
            </form>
          </article>
        </div>
        <Pointing />
      </div>
    </>
  );
} */

export default function DetallesMenu({ data, setTypeVivero }) {
  const btnAction = (e) => {
    window.history.back();
  };

  return (
    <div className="header-detalles-nav mt-2">
      <div className="d-flex align-items-center">
        <button
          className="btn btn-success p-0 rounded-circle m-2"
          onClick={btnAction}
        >
          <ArrowLeftCircleFill fill="white" />
        </button>
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
