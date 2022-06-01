import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ListPoints from "./pages/ListPoints";
import MapPoints from "./pages/MapPoints";
import Body from "./components/Body";
import AdminEntidade from "./pages/AdminEntidade";
import CreatePoint from './pages/CreatePoint'

function Paths() {
  return (
    <BrowserRouter>
      <Body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapPoints />} />
          <Route path="/list-points" element={<ListPoints />} />
          <Route exact path="/entidade/admin" element={<AdminEntidade />} />
          <Route exact path="/point/create" element={<CreatePoint />} />
        </Routes>
      </Body>
    </BrowserRouter>
  );
}

export default Paths;
