import React from "react";
import {
  BrowserRouter, Routes, Route,
  // Navigate 
} from "react-router-dom";
import { useAuth } from "./contexts/auth";

import NewVersionHome from "./pages/NewVersionHome";
import Feedback from "./pages/Feedback";
import About from "./pages/About";
import Admin from "./pages/Admin";
import ListPoints from "./pages/ListPoints";
import Point from "./pages/Point";
import MapPoints from "./pages/MapPoints";
import CadastroEntidade from "./pages/CadastroEntidade";
import EditarEntidade from "./pages/EditarEntidade";
import Body from "./components/Body/Body";
import Entity from "./pages/Entity";
import AdminEntidade from "./pages/AdminEntidade";
import CreatePoint from "./pages/CreatePoint";
import CadastroUsuario from "./pages/CadastroUsuario";
import LoginUsuario from "./pages/LoginUsuario";
import RecuperarSenha from "./pages/RecuperarSenha";
import AtualizarSenha from "./pages/AtualizarSenha";
import Ranking from "./pages/Ranking";
import Perfil from "./pages/PerfilUsuario";
import EditPoint from "./pages/EditPoint";
import ClaimDiscard from "./pages/ClaimDiscard";
import PageNotFound from "./pages/PageNotFound";

const ProtectedRoute = function ({ children }) {
  const { signed } = useAuth();

  if (!signed) {
    //return <Navigate to="/" replace />;
  }

  return children;
};

function Paths() {
  return (
    <BrowserRouter>
      <Body>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<NewVersionHome />} />
          <Route path="/mapa" element={<MapPoints />} />
          <Route path="/lista-de-pontos" element={<ListPoints />} />
          <Route path="/ponto/:id" element={<Point />} />
          <Route path="/login" element={<LoginUsuario />} />
          <Route path="/entidade/registro" element={<CadastroEntidade />} />
          <Route path="/usuario/cadastrar" element={<CadastroUsuario />} />
          <Route path="/usuario/recuperar" element={<RecuperarSenha />} />
          <Route path="/usuario/atualizar" element={<AtualizarSenha />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/ponto/:id" element={<Point />} />
          <Route
            path="/descarte/:token"
            element={
              <ProtectedRoute>
                <ClaimDiscard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/perfil"
            element={
              // <ProtectedRoute>
              <Perfil />
              // </ProtectedRoute>
            }
          />
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
          <Route
            path="/ponto/editar/:id"
            element={
              <ProtectedRoute>
                <EditPoint />
              </ProtectedRoute>
            }
          />
         
        </Routes>
      </Body>
    </BrowserRouter>
  );
}

export default Paths;