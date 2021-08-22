import React, { useState } from "react";
import { BtnBack } from "../assets/assetsHtml";
import helpHttp from "../helpers/helpHttp";
import useGetData from "../hooks/useGetData";

function AddEvent() {
  let session = JSON.parse(sessionStorage.getItem("auth")) || false,
    id = sessionStorage.getItem("id"),
    auth = { Correo: session.Correo, Password: session.Password, id_arbol: id };

  const { data, error, isPending } = useGetData(`/Plantas.php?id=${id}`);

  const click = () => (window.location.href = "./auth");

  return (
    <>
      {!session && (
        <>
          <p>
            Para continuar necesitas estar autenticado, ¿Quieres iniciar sesión?
          </p>
          <button className="btn btn-primary" onClick={click}>
            Iniciar sesión
          </button>
        </>
      )}
      <Header />
      <BtnBack type="info" />
      <div className="d-flex justify-content-around flex-wrap m-3">
        {data && <Info data={data} auth={auth} />}{" "}
        {data && <Count number={data.Total} />}
      </div>
    </>
  );
}

function Count({ number }) {
  const style = {
    fontFamily: "Chango",
    fontSize: "3rem",
    color: "var(--sv-purple)",
  };

  return (
    <div className="border border-info rounded-circle d-flex wth-300px hgt-300px my-3">
      <p className="m-auto">
        <span style={style}> {number}</span>
      </p>
    </div>
  );
}

function Info({ data, auth }) {
  return (
    <div className="d-flex flex-column align-items-center">
      <figure className="d-flex">
        <img
          className="wth-100px hgt-100px border border-info rounded-circle"
          src={`http://192.168.1.109/${data.Perfil}`}
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
      <Form auth={auth} />
    </div>
  );
}

function Form({ auth }) {
  const [viv, setViv] = useState("Producción");

  const addDetalle = (e) => {
    e.preventDefault();
    const options = {
      headers: { "Content-type": "application/json" },
      body: {
        ...auth,
        Fecha_siembra: e.target.Fecha.value,
        Planta_sembrada: e.target.Plantas.value,
        Vivero: e.target.Viv.value,
      },
    };
    console.log(options.body);

    helpHttp()
      .post("/Detalles.php", options)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <form method="POST" className="wth-90" onSubmit={addDetalle}>
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
      <label htmlFor="Viv">Tipo de vivero</label>
      <div>
        <Select set={setViv} />
      </div>
      <label htmlFor="Fecha">Fecha de {viv}</label>
      <div>
        <input
          className="form-control"
          type="date"
          name="Fecha"
          id="Fecha"
          placeholder="fecha"
          required
        />
      </div>
      <input
        type="submit"
        className="mx-auto btn btn-info my-3 wth-80 d-block"
        value="Agregar"
      />
    </form>
  );
}

function Select({ set }) {
  const { data, error, isPending } = useGetData("/Vivero.php");

  const handleChange = (e) => {
    if (e.target.value === "1") set("Producción");
    if (e.target.value === "2") set("Entrega");
  };

  return (
    <select
      className="form-control"
      name="Viv"
      id="Viv"
      required
      onChange={handleChange}
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
  );
}

function Header() {
  return (
    <header className="hgt-100px wth-100 d-flex header-event">
      <h1 className="text-center m-auto">Nuevo evento</h1>
    </header>
  );
}

export default AddEvent;
