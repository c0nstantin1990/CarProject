import React, { useEffect, useState } from "react";

function Trucks() {
  const truckUrl = "http://localhost:4000/trucks";
  const [trucks, setTrucks] = useState([]);
  const fetchTrucks = () => {
    fetch(truckUrl)
      .then((res) => res.json())
      .then((data) => {
        setTrucks(data);
      });
  };
  useEffect(() => {
    fetchTrucks();
  }, []);
  console.log(trucks);
  return (
    <div class="container my-4">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
        {trucks.map((truck) => {
          return (
            <div class="col">
              <div class="card">
                <img src={truck.img} class="card-img-top" alt="..." />
                <div class="card-body  ">
                  <h5 class="card-title ">
                    {truck.year} {truck.make} {truck.model} {truck.msrp}
                  </h5>
                  <div class="cardButtons">
                    <a href="/" target="_blank" class="btn btn-primary">
                      Description
                    </a>
                    <a href="/" target="_blank" class="btn btn-warning  ">
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
  );
}

export default Trucks;
