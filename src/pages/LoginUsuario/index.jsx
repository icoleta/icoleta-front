import React, { useState } from "react";
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
    <div className=" bg-[#4B9093] h-screen w-full">
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center border rounded-[20px] shadow-sm m-8 h-[800px] w-[500px] bg-white">
          <div className="flex flex-col justify-center items-center mb-[10px]">
            <img src={logo} alt="" />
            <h2 className="font-black text-[#4B9093] text-[33px]"><span className="text-[#F59A73]">IC</span>oleta</h2>
            <h3 className="font-mulish font-regular text-[24px]">Acesso ao sistema</h3>
          </div>
          <form onSubmit={handleSubmit} className="">
            <div className="flex flex-col mb-4">
              <label htmlFor="" className=" font-semibold text-[16px]">Endereço de e-mail</label>
              <div class="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  onChange={handleChange}
                  errors={errors}
                  className=" h-[48px] text-[14px] w-[400px] border-2 rounded-[10px] p-[12px] pl-[40px] focus:outline-[#F59A73]"
                /> 
                <div class="absolute inset-y-0 left-0 pl-3  flex items-center pointer-events-none"> 
                    <img src={envelope} alt="" className="" /> 
                </div> 
              </div>
              
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold text-[16px]">Senha</label>
              <div class="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="******************"
                  onChange={handleChange}
                  errors={errors}
                  className="h-[48px] w-[400px] text-[14px] border-2 rounded-[10px] p-[12px] pl-[40px] focus:outline-[#F59A73]"
                /> 
                <div class="absolute inset-y-0 left-0 pl-3  flex items-center pointer-events-none"> 
                    <img src={lock} alt="" className="" /> 
                </div> 
              </div>
        
            </div>
            <button type="submit" className="mt-[80px] bg-[#F59A73] border rounded-[10px] font-inter font-bold text-white text-[18px] w-[400px] h-[48px] ">Entrar na plataforma</button>
          </form>
          <div className="mt-[20px] flex flex-col items-center">
            <div className="text-[#7C7C8A] text-[14px] font-regular">Esqueceu a senha?<Link to="/usuario/recuperar" className="text-[#F59A73] text-[14px] font-bold"> Recuperar senha</Link></div>
            <div className="text-[#7C7C8A] text-[14px] font-regular">Não possui conta?<Link to="/usuario/cadastrar" className="text-[#F59A73] text-[14px] font-bold"> Cadastre-se</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUsuario;
