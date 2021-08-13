import React from "react";
import err from "../assets/logofail.svg";

function Error() {
  return (
    <>
      <div className="carrusel m-auto">
        <div
          id="carouselExampleIndicators"
          class="carousel slide carrusel"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="6"
              aria-label="Slide 7"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://jlcabrera.000webhostapp.com/carrusel/ca1.jpg"
                class="d-block w-100"
                alt="Imagen de vivero"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://jlcabrera.000webhostapp.com/carrusel/ca2.jpg"
                class="d-block w-100"
                alt="Imagen de vivero"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://jlcabrera.000webhostapp.com/carrusel/ca3.jpg"
                class="d-block w-100"
                alt="Imagen de vivero"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://jlcabrera.000webhostapp.com/carrusel/ca4.jpg"
                class="d-block w-100"
                alt="Imagen de vivero"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://jlcabrera.000webhostapp.com/carrusel/ca5.jpg"
                class="d-block w-100"
                alt="Imagen de vivero"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://jlcabrera.000webhostapp.com/carrusel/ca6.jpg"
                class="d-block w-100"
                alt="Imagen de vivero"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://jlcabrera.000webhostapp.com/carrusel/ca7.jpg"
                class="d-block w-100"
                alt="img"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

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
