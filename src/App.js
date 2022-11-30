import "./App.css";
import Header from "./Header";
import Cars from "./Cars";
import Home from "./Home";
import News from "./News";
import Trucks from "./Trucks";
import Luxury from "./Luxury";
import Addcar from "./Addcar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/cars" element={<Cars />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/trucks" element={<Trucks />} />
        <Route exact path="/luxury" element={<Luxury />} />
        <Route exact path="/cars/new" element={<Addcar />} />
      </Routes>
    </div>
  );
}

export default App;
