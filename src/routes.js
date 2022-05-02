import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Body from "./components/Body";

function Paths() {
  return (
    <BrowserRouter>
      <Body>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Body>
    </BrowserRouter>
  );
}

export default Paths;
