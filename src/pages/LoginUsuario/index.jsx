import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import logo from "../../assets/logonova.svg";
import envelope from "../../assets/EnvelopeSimple.svg";
import lock from "../../assets/Lock.svg";

import useForm from "../../hooks/useForm";

const LoginUsuario = () => {
  const navigate = useNavigate();
  const { Login, user } = useAuth();
  const { values, errors, handleChange, handleSubmit } = useForm(
    whenSubmitted,
    ["email", "password"]
  );

  if (user) {
    if (user.role === 'admin') navigate("/admin");
    else if (user.role === 'company') navigate("/entidade/admin");
    else navigate("/perfil");
  }

  async function whenSubmitted() {
    const { email, password } = values;
    const wasLoginSuccessful = await Login(email, password);
    if (!wasLoginSuccessful) {
      alert("Nome de usuário ou senha incorretas");
    }
  }

  return (
    <div className=" flex justify-center items-center bg-[#4B9093] h-screen w-full">
      <div className="flex flex-col justify-center items-center border rounded-[20px] shadow-sm m-8 h-[600px] w-[400px] phone:h-[400px] phone:w-[300px] 2xl:h-[600px] 2xl:w-[500px] bg-white ">
        <div className="flex flex-col justify-center items-center mb-[10px]">
          <img src={logo} alt="" className="h-[80px] w-[80px] 2xl:h-[110px]  2xl:w-[110px] phone:h-[60px] phone:w-[60px] " />
          <h2 className="font-black text-[#4B9093] text-[25px] phone:text-[20px] "><span className="text-[#F59A73]">IC</span>oleta</h2>
          <h3 className="font-mulish font-regular text-[20px] 2xl:text-[30px] phone:text-[15px] ">Acesso ao sistema</h3>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex flex-col mb-4">
            <label htmlFor="" className=" font-semibold text-[12px] 2xl:text-[15px] phone:text-[13px] ">Endereço de e-mail</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu e-mail"
                onChange={handleChange}
                errors={errors}
                className=" h-[48px] w-[280px] 2xl:w-[400px] phone:w-[250px] phone:h-[40px] text-[14px] border-2 rounded-[10px] p-[12px] pl-[40px] focus:outline-[#F59A73]"
              /> 
              <div className="absolute inset-y-0 left-0 pl-3  flex items-center pointer-events-none"> 
                  <img src={envelope} alt="" className="" /> 
              </div> 
            </div>
            
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="font-semibold text-[12px] 2xl:text-[15px] phone:text-[13px] ">Senha</label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="***************"
                onChange={handleChange}
                errors={errors}
                className="h-[48px] w-[280px] 2xl:w-[400px] phone:w-[250px] phone:h-[40px]  text-[14px] border-2 rounded-[10px] p-[12px] pl-[40px] focus:outline-[#F59A73]"
              /> 
              <div className="absolute inset-y-0 left-0 pl-3  flex items-center pointer-events-none"> 
                  <img src={lock} alt="" className="" /> 
              </div> 
            </div>
      
          </div>
          <button type="submit" className=" w-[280px] 2xl:w-[400px] phone:w-[250px] phone:h-[40px] phone:mt-[30px] phone:text-[14px] h-[48px] mt-[60px] bg-[#F59A73] border rounded-[10px] font-inter font-bold text-white text-[18px]  ">Entrar na plataforma</button>
        </form>
        <div className="mt-[20px] flex flex-col items-center">
          <div className="text-[#7C7C8A] text-[14px] font-regular">Esqueceu a senha?<Link to="/usuario/recuperar" className="text-[#F59A73] text-[14px] phone:text-[12px] font-bold"> Recuperar senha</Link></div>
          <div className="text-[#7C7C8A] text-[14px] font-regular">Não possui conta?<Link to="/usuario/cadastrar" className="text-[#F59A73] text-[14px] phone:text-[12px] font-bold"> Cadastre-se</Link></div>
        </div>
      </div>
    </div>
  );
};

export default LoginUsuario;
