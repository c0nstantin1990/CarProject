import React from "react";

function Home() {
  return (
    <div style={{ height: "100px !important" }}>
      <div
        id="myCarousel"
        class=" carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
          ></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
          <div class="carousel-item main-carousel-item active">
            <div
              class="overlay-image"
              style={{
                backgroundImage: `url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lexus-lf-z-electrified-1622040420.jpg")`,
              }}
            ></div>
            <div
              class="container main-page-container "
              style={{ marginTop: "70px" }}
            >
              <h1 class="fw-bold">LOOKING FOR A CAR?</h1>
              <p class="fs-3">
                Find out what people say about your future car.
              </p>
              <a href="/cars" class="btn btn-outline-light">
                Click here
              </a>
            </div>
          </div>
          <div class="carousel-item main-carousel-item">
            <div
              class="overlay-image"
              style={{
                backgroundImage: `url("https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/17/145313.jpg")`,
              }}
            ></div>
            <div
              class="container main-page-container "
              style={{ marginTop: "70px" }}
            >
              <h1 class="fw-bold">LOOKING FOR A CAR?</h1>
              <p class="fs-3">
                Find out what people say about your future car.
              </p>
              <a href="/cars" class="btn btn-outline-light">
                Click here
              </a>
            </div>
          </div>
          <div class="carousel-item main-carousel-item">
            <div
              class="overlay-image"
              style={{
                backgroundImage: `url("https://www.pv-magazine.com/wp-content/uploads/2022/03/646106-1200x514.jpg")`,
              }}
            ></div>
            <div
              class="container main-page-container"
              style={{ marginTop: "70px" }}
            >
              <h1 class="fw-bold">LOOKING FOR A CAR?</h1>
              <p class="fs-3">
                Find out what people say about your future car.
              </p>
              <a href="/cars" class="btn btn-outline-light">
                Click here
              </a>
            </div>
          </div>
        </div>
        <a
          href="#myCarousel"
          class="carousel-control-prev"
          role="button"
          data-bs-slide="prev"
        >
          <span class="sr-only"></span>
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a
          href="#myCarousel"
          class="carousel-control-next"
          role="button"
          data-bs-slide="next"
        >
          <span class="sr-only"></span>
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  );
}

export default Home;
