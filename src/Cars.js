import React, { useEffect, useState } from "react";

function Cars() {
  const carUrl = "http://localhost:4000/cars";
  const [cars, setCars] = useState([]);
  const fetchCars = () => {
    fetch(carUrl)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  };
  useEffect(() => {
    fetchCars();
  }, []);
  console.log(cars);
  return (
    <div
      style={{
        backgroundColor: "gray",
      }}
    >
      <div class="container my-4">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
          {cars.map((car) => {
            return (
              <div class="col">
                <div
                  class="card"
                  style={{
                    backgroundColor: "gray",
                  }}
                >
                  <img src={car.img} class="card-img-top" alt="..." />
                  <div class="card-body  ">
                    <h5 class="card-title ">
                      {car.year} {car.make} {car.model} {car.msrp}
                    </h5>
                    <div class="cardButtons">
                      <a href="/" target="_blank" class="btn btn-primary  ">
                        Edit
                      </a>
                      <a href="/" target="_blank" class="btn btn-danger">
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cars;
