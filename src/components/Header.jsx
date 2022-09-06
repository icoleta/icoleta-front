import React, { useRef, useState } from "react";
import svg from "../assets/recycle_icon.png";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import useOutsideClick from "../hooks/useOutsideClick";
import { useNavigate } from "react-router-dom";

import "../pages/CadastroEntidade/style.css";

function Header() {
  const { signed, user, Logout } = useAuth();
  const wrapperRef = useRef(null);
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useOutsideClick(wrapperRef, () => setIsDropdownOpen(false));

  const navigate = useNavigate();

  async function logoutWrapper() {
    await Logout();
    navigate("/");
  }

  return (
    <div className="flex flex-col px-16 py-8 justify-between tablet:flex-row tablet:px-32">
      <Link to="/">
        <div className="flex items-center tablet:child:ml-4 justify-center mb-2">
          <img src={svg} className="w-8 h-8" alt="logo" />
          <h3 className="text-4xl font-bold text-slate-900 tracking-tighter">
            IColeta
          </h3>
        </div>
      </Link>
      <div className="flex justify-center">
        {signed ? (
          <div className="child:ml-4 flex items-center text-slate-700 font-semibold text-sm">
            {user.role !== "admin" && user.role !== "company" && (
              <Link
                to="/perfil"
                className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75"
              >
                Dashboard
              </Link>
            )}
            {user.role === "company" && (
              <Link
                to="/entidade/admin"
                className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75"
              >
                Dashboard
              </Link>
            )}
            {user.role === "admin" && (
              <Link
                to="/admin"
                className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75"
              >
                Admin
              </Link>
            )}
            <Link
              to="/ranking"
              className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75"
            >
              Ranking
            </Link>
            <button
              type="button"
              className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75 font-semibold"
              onClick={logoutWrapper}
            >
              Sair
            </button>
          </div>
        ) : (
          <div className="child:ml-5 flex flex-col items-center text-slate-700 font-semibold text-sm phone:flex-row">

            <Link
              to="/"
              className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75"
            >
              Início
            </Link>

            <Link
              to="/ranking"
              className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75"
            >
              Ranking
            </Link>

            {location.pathname !== "/usuario/cadastrar" && (
              <Link
                to="/usuario/cadastrar"
                className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75 rounded-t py-2 px-4 block whitespace-no-wrap"
              >
                Cadastro
              </Link>
            )}

            {location.pathname === "/usuario/cadastrar" && (
              <Link
                to="/entidade/registro"
                className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75 rounded-t py-2 px-4 block whitespace-no-wrap"
              >
                Cadastro Entidade
              </Link>
            )}
            <Link
              to="/login"
              className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75"
            >
              Entrar
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
