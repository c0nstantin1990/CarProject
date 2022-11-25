import "./App.css";
import Header from "./Header";
import Cars from "./Cars";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/cars" element={<Cars />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
