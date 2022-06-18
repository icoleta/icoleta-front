import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/auth";

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
import AtualizarSenha from "./pages/AtualizarSenha";

const ProtectedRoute = function ({ children }) {
  const { signed } = useAuth();

  if (!signed) {
    return <Navigate to="/" replace />;
  }

  return children;
};


function Paths() {
  return (
    <BrowserRouter>
      <Body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mapa" element={<MapPoints />} />
          <Route path="/lista-de-pontos" element={<ListPoints />} />
          <Route path="/entidade/registro" element={<CadastroEntidade />} />
          <Route path="/entidade/login" element={<LoginEntidade />} />
          <Route path="/usuario/cadastrar" element={<CadastroUsuario />} />
          <Route path="/usuario/login" element={<LoginUsuario />} />
          <Route path="/usuario/recuperar" element={<RecuperarSenha />} />
          <Route path="/usuario/atualizar" element={<AtualizarSenha />} />
          <Route
            path="/entidade"
            element={
              <ProtectedRoute>
                <Entity />
              </ProtectedRoute>
            }
          />
          <Route
            path="/entidade/edicao"
            element={
              <ProtectedRoute>
                <EditarEntidade />
              </ProtectedRoute>
            }
          />
          <Route
            path="/entidade/admin"
            element={
              <ProtectedRoute>
                <AdminEntidade />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ponto/criar"
            element={
              <ProtectedRoute>
                <CreatePoint />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Body>
    </BrowserRouter>
  );
}

export default Paths;
