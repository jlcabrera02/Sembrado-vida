import React from "react";
import { OptionHtml } from "../assets/assetsHtml";
import useGetData from "../hooks/useGetData";

export function InputForm({ data, setId }) {
  const style = {
    borderRadius: "10px",
    padding: "6px",
    border: "think solid black",
    backgroundColor: "white",
  };

  return (
    <>
      <article className="d-flex justify-content-center m-3">
        <form>
          <select
            name="cac"
            defaultValue="1"
            onChange={(e) => setId(Number.parseInt(e.target.value))}
            style={style}
          >
            {data ? (
              data.map((el) => (
                <OptionHtml key={el.id_cac} value={el.id_cac} body={el.Cac} />
              ))
            ) : (
              <option value="0">Sin datos 😔</option>
            )}
          </select>
        </form>
      </article>
    </>
  );
}

export function InputFormDetalle({ setTypeVivero }) {
  const { data, error, isPending } = useGetData("/Vivero.php");

  const handleChange = (e) => {
    if (e.target.value === "0") {
      setTypeVivero("");
    } else {
      setTypeVivero(`&vivero=${Number.parseInt(e.target.value)}`);
    }
  };

  return (
    <form className="viv-form mx-auto">
      <select
        className="text-center mt-2"
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
        {error && !isPending && <option value="0">Sin datos 😔</option>}
      </select>
    </form>
  );
}
