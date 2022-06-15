import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ListPoints from "./pages/ListPoints";
import MapPoints from "./pages/MapPoints";
import CadastroEntidade from "./pages/CadastroEntidade";
import EditarEntidade from "./pages/EditarEntidade";
import LoginEntidade from "./pages/LoginEntidade";
import Body from "./components/Body";
import Entity from "./pages/Entity";
import AdminEntidade from "./pages/AdminEntidade";
import CreatePoint from "./pages/CreatePoint";

import CadastroUsuario from "./pages/CadastroUsuario";
import LoginUsuario from "./pages/LoginUsuario";
import RecuperarSenha from "./pages/RecuperarSenha";


function Paths() {
  return (
    <BrowserRouter>
      <Body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mapa" element={<MapPoints />} />
          <Route path="/lista-de-pontos" element={<ListPoints />} />
          <Route path="/entidade" element={<Entity />} />
          <Route path="/entidade/registro" element={<CadastroEntidade />} />
          <Route path="/entidade/edicao" element={<EditarEntidade />} />
          <Route path="/entidade/login" element={<LoginEntidade />} />
          <Route path="/entidade/admin" element={<AdminEntidade />} />
          <Route path="/ponto/criar" element={<CreatePoint />} />

          <Route path="/usuario/cadastrar" element={<CadastroUsuario />} />
          <Route path="/usuario/login" element={<LoginUsuario />} />
          <Route path="/usuario/recuperar" element={<RecuperarSenha />} />
          
        </Routes>
      </Body>
    </BrowserRouter>
  );
}

export default Paths;
