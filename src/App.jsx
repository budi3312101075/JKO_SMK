import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tentang from "./Pages/Tentang";
import Layanan from "./Pages/Layanan";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TentangKami" element={<Tentang />}></Route>
          <Route path="/LayananKami" element={<Layanan />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
