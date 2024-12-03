import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";
import logoHeader from "../../assets/logo-header.png";

import "../../pages/CadastroEntidade/style.css";

import { UseToggle } from "../../hooks/useToggle";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import { UseOverflowHidden } from "../../hooks/useOverflowHidden";



function Header() {
  const { signed, user, Logout } = useAuth();
  const location = useLocation();
  const [toggle, onToggle] = UseToggle();
  UseOverflowHidden(toggle);

  const navigate = useNavigate();

  async function logoutWrapper() {
    await Logout();
    navigate("/");
  }

  function handleMenuClick(event){
    if (event.target !== event.currentTarget && toggle){
      onToggle()
    }
  }


  return (
    <>
      {/*dark bkg*/}
      <div  className={`${!toggle ? 'invisible' : 'visible'}  absolute  duration-100 ease-out transition-all z-10 w-full h-screen	bg-gray-900 opacity-50  `}></div>

      <div  className=" z-10 relative bg-white	w-full flex  items-center px-8 py-[12px] justify-between tablet:flex-col laptop:flex-row tablet:px-[10%] shadow-md ">
        <NavLink to="/" className="transition ease-in-out delay-100 hover:scale-105 duration-300">
          <img src={logoHeader} className="h-[3rem] w-[10rem] tablet:h-[60px] tablet:w-[100%] grow" alt="Logo do IColeta" title="Logo do IColeta" />
        </NavLink>
        
        <button className = {`tablet:hidden`} onClick={() => onToggle()}>
          {toggle ? <IoMdClose className="w-8 h-8"/> 
          : <GiHamburgerMenu className="w-6 h-6"/>
          }
        </button>

        <div className={`right-0 ${!toggle && 'translate-x-full'}  bg-white top-[4.6rem] pt-[1rem] h-screen w-[15rem] absolute z-10  px-[8px]  tablet:py-0 tablet:static tablet:h-auto tablet:w-auto tablet:translate-x-0  duration-300 ease-out transition-all`}>
          <navbar onClick = {handleMenuClick} className="laptop:child:ml-4 flex flex-col mt-4 px-4 gap-[12px] items-end justify-center tablet:flex-row tablet:mt-0 tablet:px-0 tablet:items-center text-slate-700 font-semibold text-sm ">
            <NavLink
              to="/"
              className={({ isActive }) => `${isActive ? 'font-bold	text-sunset-orange-dark' : 'text-sunset-orange'} cursor-pointer py-2   transition ease-in-out delay-100 hover:text-sunset-orange hover:text-sunset-orange-dark duration-300 text-[18px]`}>
              Inicio
            </NavLink>

            <NavLink
              to="/ranking"
              className={({ isActive }) => `${isActive ? 'font-bold	text-sunset-orange-dark' : 'text-sunset-orange'}  cursor-pointer py-2   transition ease-in-out delay-100 hover:text-sunset-orange hover:text-sunset-orange-dark duration-300 text-[18px]`}>
              Classificações
            </NavLink>

            {!signed || signed && user.role !== "admin" && user.role !== "company" && (
              <NavLink
              to="/contato"
              className={({ isActive }) => `${isActive ? 'font-bold	text-sunset-orange-dark' : 'text-sunset-orange'} cursor-pointer py-2   transition ease-in-out delay-100 hover:text-sunset-orange hover:text-sunset-orange-dark duration-300 text-[18px]`}
            >
              Contate-nos
            </NavLink>)}
              
            {signed ? (
              <>
                {user.role !== "admin" && user.role !== "company" && (
                  <NavLink
                    to="/perfil"
                    className={({ isActive }) => `${isActive ? 'font-bold	text-sunset-orange-dark' : 'text-sunset-orange'} cursor-pointer py-2   transition ease-in-out delay-100 hover:text-sunset-orange hover:text-sunset-orange-dark duration-300 text-[18px]`}
                  >
                    Dashboard
                  </NavLink>
                )}
                {user.role === "company" && (
                  <NavLink
                    to="/entidade/admin"
                    className={({ isActive }) => `${isActive ? 'font-bold	text-sunset-orange-dark' : 'text-sunset-orange'} cursor-pointer py-2   transition ease-in-out delay-100 hover:text-sunset-orange hover:text-sunset-orange-dark duration-300 text-[18px]`}
                  >
                    Dashboard
                  </NavLink>
                )}
                {user.role === "admin" && (
                  <NavLink
                    to="/admin"
                    className={({ isActive }) => `${isActive ? 'font-bold	text-sunset-orange-dark' : 'text-sunset-orange'} cursor-pointer py-2   transition ease-in-out delay-100 hover:text-sunset-orange hover:text-sunset-orange-dark duration-300 text-[18px]`}
                  >
                    Admin
                  </NavLink>
                )}

                <button
                  type="button"
                  className="rounded-md border-2 border-sunset-orange py-2 px-6 text-sunset-orange transition ease-in-out delay-100 hover:scale-105 hover:text-white hover:bg-sunset-orange
                    duration-300 text-[18px] hover:bg-sunset-orange-dark hover:border-sunset-orange-dark"
                  onClick={logoutWrapper}
                >
                  Sair
                </button>
              </>
            ) : (
              <>
                {location.pathname !== "/usuario/cadastrar" && (
                  <NavLink
                    to="/usuario/cadastrar"
                    className={({ isActive }) => `${isActive ? 'font-bold	text-sunset-orange-dark' : 'text-sunset-orange'} cursor-pointer py-2   transition ease-in-out delay-100 hover:text-sunset-orange hover:text-sunset-orange-dark duration-300 text-[18px]`}
                  >
                    Cadastre-se
                  </NavLink>
                )}

                {location.pathname === "/usuario/cadastrar" && (
                  <NavLink
                    to="/entidade/registro"
                    className="border border-sunset-orange text-sunset-orange rounded-md py-2 px-6 delay-100 hover:bg-sunset-orange-dark  hover:text-white  duration-300 rounded-t block whitespace-no-wrap"
                  >
                    Cadastro Entidade
                  </NavLink>
                )}
                <NavLink
                  to="/login"
                  className="rounded-md bg-sunset-orange py-2 px-6 text-white transition ease-in-out delay-100  duration-300 text-[18px] hover:bg-sunset-orange-dark"
                >
                  Entrar
                </NavLink>
              </>
            )}
          
          </navbar>
        </div>
      </div>
    </>
  );
}

export default Header;
