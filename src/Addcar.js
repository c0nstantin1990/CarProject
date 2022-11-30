import React, { useEffect, useState } from "react";
import Axios from "axios";

function Addcar() {
  const url = "http://localhost:4000/cars";
  const [data, setData] = useState({
    Make: "",
    Model: "",
    Year: "",
    Msrp: "",
    Img: "",
  });
  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      make: data.make,
      model: data.model,
      year: data.year,
      msrp: data.msrp,
      img: data.img,
    });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }
  return (
    <div class="container my-4">
      <div class="col-mb-3 col-md-3 col-lg-7 margin">
        <form onSubmit={(e) => submit(e)}>
          <h2>Add Car</h2>
          <label class="form-label">Make:</label>
          <input
            class="form-control"
            onChange={(e) => handle(e)}
            id="make"
            value={data.make}
            placeholder="make"
            type="text"
          />
          <label class="form-label">Model:</label>
          <input
            class="form-control"
            onChange={(e) => handle(e)}
            id="model"
            value={data.model}
            placeholder="model"
            type="text"
          />
          <label class="form-label">Year:</label>
          <input
            class="form-control"
            onChange={(e) => handle(e)}
            id="year"
            value={data.year}
            placeholder="year"
            type="text"
          />
          Msrp:
          <input
            class="form-control"
            onChange={(e) => handle(e)}
            id="msrp"
            value={data.msrp}
            placeholder="msrp"
            type="text"
          />
          <label class="form-label">Img Url:</label>
          <input
            class="form-control"
            onChange={(e) => handle(e)}
            id="img"
            value={data.img}
            placeholder="img"
            type="text"
          />
          <input type="submit" class="btn btn-primary " />
          <a class="btn btn-danger ">Cancel</a>
        </form>
      </div>
    </div>
  );
}

export default Addcar;
