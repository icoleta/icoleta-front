import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import useOutsideClick from "../../hooks/useOutsideClick";
import { useNavigate } from "react-router-dom";
import logoHeader from "../../assets/logo-header.png";

import "../../pages/CadastroEntidade/style.css";

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
    <div className="flex flex-col items-center px-8 py-[12px] justify-between tablet:flex-row tablet:px-32 shadow-md">
      <Link to="/" className="transition ease-in-out delay-150 hover:scale-105 duration-300">
        <img src={logoHeader} className="h-[60px]" alt="Logo do IColeta" title="Logo do IColeta" />
      </Link>
      <div className="flex justify-center gap-[12px]">
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
          <div className="flex flex-col md:flex-row gap-[12px] justify-center items-center text-slate-700 font-semibold text-sm phone:flex-row">

            <Link
              to="/#sobre-projeto"
              className="rounded-md cursor-pointer py-2 px-6 text-sunset-orange transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 text-[18px]"
            >
              Sobre
            </Link>

            <Link
              to="/ranking"
              className="rounded-md py-2 px-6 text-sunset-orange transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 text-[18px]"
            >
              Classificações
            </Link>

            {location.pathname !== "/usuario/cadastrar" && (
              <Link
                to="/usuario/cadastrar"
                className="rounded-md py-2 px-6 text-sunset-orange transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 text-[18px]"
              >
                Cadastre-se
              </Link>
            )}

            {location.pathname === "/usuario/cadastrar" && (
              <Link
                to="/entidade/registro"
                className="rounded-md bg-sunset-orange py-2 px-6 text-white hover:bg-sunset-orange-dark duration-75 rounded-t block whitespace-no-wrap"
              >
                Cadastro Entidade
              </Link>
            )}
            <Link
              to="/login"
              className="rounded-md bg-sunset-orange py-2 px-6 text-white transition ease-in-out delay-150 hover:scale-105 duration-300 text-[18px] hover:opacity-90"
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
