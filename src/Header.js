import React from "react";
import headerLogo from "./CarNet.png";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand p-0" href="/">
            <img src={headerLogo} alt="..." width="70" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="index.html">
                  News
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/cars">
                  Cars
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/">
                  Trucks
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/">
                  Luxury
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Add
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/cars/new">
                      Add Car
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/trucks/new">
                      Add Truck
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/luxuries/new">
                      Add Luxury
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="/news/new">
                      Add Article
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" action="/search" method="POST">
              <input
                class="form-control me-2"
                type="text"
                name="make"
                placeholder="Make"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-danger"
                type="submit"
                value="Search"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
