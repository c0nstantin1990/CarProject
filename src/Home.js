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
                backgroundImage:
                  "url('https://images7.alphacoders.com/460/460370.jpg')",
              }}
            ></div>
            <div
              class=" container main-page-container "
              style={{ marginTop: "70px" }}
            >
              <h1 class="fw-bold">LOOKING FOR A CAR?</h1>
              <p class="fs-3">Find the car of your dreams.</p>
              <a href="/cars" class="btn btn-outline-light">
                Click here
              </a>
            </div>
          </div>
          <div class="carousel-item main-carousel-item">
            <div
              class="overlay-image"
              style={{
                backgroundImage: `url("https://media.wired.com/photos/5dd828ba9ac14a0008116983/master/pass/Transpo_TeslaStoryOne_Cybertruck-5.jpg")`,
              }}
            ></div>
            <div
              class="container main-page-container "
              style={{ marginTop: "70px" }}
            >
              <h1 class="fw-bold">LOOKING FOR A TRUCK?</h1>
              <p class="fs-3">
                Find the truck that can do all your dirty work.
              </p>
              <a href="/trucks" class="btn btn-outline-light">
                Click here
              </a>
            </div>
          </div>
          <div class="carousel-item main-carousel-item">
            <div
              class="overlay-image"
              style={{
                backgroundImage: `url("https://images.hdqwalls.com/download/lamborghini-urus-4k-qk-1920x1080.jpg")`,
              }}
            ></div>
            <div
              class="container main-page-container"
              style={{ marginTop: "70px" }}
            >
              <h1 class="fw-bold">LOOKING FOR A SUV?</h1>
              <p class="fs-3">Find the Suv that can fit everyone.</p>
              <a href="/suvs" class="btn btn-outline-light">
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
