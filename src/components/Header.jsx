import React, { useRef, useState } from "react";
import svg from "../assets/recycle_icon.png";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import useOutsideClick from "../hooks/useOutsideClick";
import { useNavigate } from "react-router-dom";

import "../pages/CadastroEntidade/style.css";

function Header() {
  const { signed, user, Logout } = useAuth();
  const wrapperRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useOutsideClick(wrapperRef, () => setIsDropdownOpen(false));

  const navigate = useNavigate();

  async function logoutWrapper() {
    await Logout();
    navigate("/");
  }

  return (
    <div className="flex flex-col px-16 py-8  justify-between tablet:flex-row tablet:px-32">
      <Link to="/">
        <div className="flex items-center tablet:child:ml-4 justify-center mb-2">
          <img src={svg} className="w-8 h-8" alt="logo" />
          <h3 className="text-4xl font-bold text-slate-900 tracking-tighter">
            IColeta
          </h3>
        </div>
      </Link>
      <div className="flex justify-center">
        {
          signed ? (
            <div className="child:ml-4 flex items-center text-slate-700 font-semibold text-sm">
              {
                user.role !== 'admin' && user.role !== 'company' && (
                  <Link
                    to="/perfil"
                    className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75"
                  >
                    Dashboard
                  </Link>
                )
              }
              {
                user.role === 'company' && (
                  <Link
                    to="/entidade/admin"
                    className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75"
                  >
                    Dashboard
                  </Link>
                )
              }
              {
                user.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75"
                  >
                    Admin
                  </Link>
                )
              }
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
                to="/ranking"
                className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75"
              >
                Ranking
              </Link>

              <div class="dropdown inline-block relative flex-container">
                <button class="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75 inline-flex items-center">
                  <span class="mr-1">Cadastro</span>
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <Link
                    to="/usuario/cadastrar"
                    className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75
                    rounded-t py-2 px-4 block whitespace-no-wrap
                    "
                  >
                    Usuário
                  </Link>
                  <Link
                    to="/entidade/registro"
                    className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75
                    rounded-t py-2 px-4 block whitespace-no-wrap"
                  >
                    Entidade
                  </Link> 
                </ul>
              </div>

              <Link
                to="/login"
                className="rounded-md bg-sunset-orange py-2 px-6 mb-2 text-white hover:bg-sunset-orange-dark duration-75"
              >
                Login
              </Link>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Header;
