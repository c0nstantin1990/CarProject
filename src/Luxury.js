import React from "react";

function Luxury() {
  return (
    <div>
      <div class="container my-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
          <div class="col">
            <div class="card">
              <img
                src="https://picsum.photos/id/15/300"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Mountains</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nostrum eveniet accusamus vel laborum quod quam exercitationem
                  esse rem, aliquam beatae?
                </p>
                <a
                  href="https://picsum.photos/id/15/1500"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Large Pics
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://picsum.photos/id/16/300"
                target="_blank"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">River</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Expedita minus dicta vel in ipsum cupiditate voluptates ipsam
                  officiis vitae nam?
                </p>
                <a
                  href="https://picsum.photos/id/16/1500"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Large Pics
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://picsum.photos/id/17/300"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Trees</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore nesciunt quos ab rem natus suscipit maxime sapiente
                  voluptas! Deleniti, inventore?
                </p>
                <a
                  href="https://picsum.photos/id/17/1500"
                  class="btn btn-primary"
                >
                  Large Pics
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Luxury;
