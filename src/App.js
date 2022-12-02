import "./App.css";
import Header from "./Header";
import Cars from "./Cars";
import Home from "./Home";
import Trucks from "./Trucks";
import Addcar from "./Addcar";
import Addtruck from "./Addtruck";
import Suvs from "./Suvs";
import Addsuv from "./Addsuv";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/cars" element={<Cars />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/trucks" element={<Trucks />} />
        <Route exact path="/trucks/new" element={<Addtruck />} />
        <Route exact path="/cars/new" element={<Addcar />} />
        <Route exact path="/suvs" element={<Suvs />} />
        <Route exact path="/suvs/new" element={<Addsuv />} />
      </Routes>
    </div>
  );
}

export default App;
