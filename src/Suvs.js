import React, { useEffect, useState } from "react";

function Suvs() {
  const suvUrl = "http://localhost:4000/suvs";
  const [suvs, setSuvs] = useState([]);
  const fetchSuvs = () => {
    fetch(suvUrl)
      .then((res) => res.json())
      .then((data) => {
        setSuvs(data);
      });
  };
  useEffect(() => {
    fetchSuvs();
  }, []);
  console.log(suvs);
  return (
    <div
      style={{
        backgroundColor: "gray",
      }}
    >
      <div class="container my-4">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
          {suvs.map((suv) => {
            return (
              <div class="col">
                <div
                  class="card"
                  style={{
                    backgroundColor: "gray",
                  }}
                >
                  <img src={suv.img} class="card-img-top" alt="..." />
                  <div class="card-body  ">
                    <h5 class="card-title ">
                      {suv.year} {suv.make} {suv.model} {suv.msrp}
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

export default Suvs;
