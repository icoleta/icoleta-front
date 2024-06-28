import React from "react";
import { useNavigate, Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import logo from "../../assets/logonova.svg";
import envelope from "../../assets/EnvelopeSimple.svg";
import lock from "../../assets/Lock.svg";
import person from "../../assets/Person.svg";
import phone from "../../assets/Phone.svg";

import companyApi from "./../../services/api/company";



const CadastroEntidade = () => {
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit } = useForm(
    whenSubmitted,
    ["name", "phone", "email", "password"]
  );

  async function whenSubmitted() {
    await companyApi.createCompany(values);
    navigate("/login");
  }

  return (
    <div className="flex justify-center items-center bg-[#4B9093] h-screen w-full">
      <div className="flex flex-col justify-center items-center border rounded-[20px] shadow-sm m-8 h-auto p-4 w-[400px] 2xl:w-[500px] phone:w-[350px] bg-white">
        <div className="flex flex-col justify-center items-center mb-[10px] phone:mb-[5px]">
          <img src={logo} alt="" className="h-[70px] w-[70px] 2xl:h-[110px]  2xl:w-[110px] phone:h-[60px] phone:w-[60px]" />
          <h2 className="font-black text-[#4B9093] text-[25px] 2xl:text-[33px] phone:text-[22px]"><span className="text-[#F59A73]">IC</span>oleta</h2>
          <h3 className="font-mulish font-regular text-[16px] 2xl:text-[25px] phone:text-[15px] text-[#7C7C8A]">Cadastro de <span className="font-black text-[#F59A73]">Entidade</span></h3>
          <p className="font-mulish font-regular text-[12px] 2xl:text-[16px] text-[#7C7C8A]">Preencha com informações  da entidade</p>
        </div>
        <form onSubmit={handleSubmit} className="">
        <div className="flex flex-col mb-4 phone:mb-[10px]">
            <label htmlFor="" className=" font-semibold text-[12px] 2xl:text-[15px] phone:text-[13px]">Nome</label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Digite o nome"
                onChange={handleChange}
                errors={errors}
                className=" h-[40px] w-[280px] 2xl:w-[400px] phone:w-[250px] phone:h-[40px] text-[12px] 2xl:text-[14px] border-2 rounded-[10px] p-[12px] pl-[40px] focus:outline-[#F59A73]"
              /> 
              <div className="absolute inset-y-0 left-0 pl-3  flex items-center pointer-events-none"> 
                  <img src={person} alt="" className="" /> 
              </div> 
            </div>
          </div>
          <div className="flex flex-col mb-4 phone:mb-[10px]">
            <label htmlFor="" className=" font-semibold text-[12px] 2xl:text-[15px] phone:text-[13px]">Telefone</label>
            <div className="relative">
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Digite o telefone"
                onChange={handleChange}
                errors={errors}
                className=" h-[40px] w-[280px] 2xl:w-[400px] phone:w-[250px] phone:h-[40px] text-[12px] 2xl:text-[14px] border-2 rounded-[10px] p-[12px] pl-[40px] focus:outline-[#F59A73]"
              /> 
              <div className="absolute inset-y-0 left-0 pl-3  flex items-center pointer-events-none"> 
                  <img src={phone} alt="" className="" /> 
              </div> 
            </div>
          </div>
          
          <div className="flex flex-col mb-4 phone:mb-[10px]">
            <label htmlFor="" className=" font-semibold text-[12px] 2xl:text-[15px] phone:text-[13px]">Endereço de e-mail</label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Digite seu e-mail"
                onChange={handleChange}
                errors={errors}
                className=" h-[40px] w-[280px] 2xl:w-[400px] phone:w-[250px] phone:h-[40px] text-[12px] 2xl:text-[14px] border-2 rounded-[10px] p-[12px] pl-[40px] focus:outline-[#F59A73]"
              /> 
              <div className="absolute inset-y-0 left-0 pl-3  flex items-center pointer-events-none"> 
                  <img src={envelope} alt="" className="" /> 
              </div> 
            </div>
          </div>
            <div className="flex flex-col phone:mb-[10px]">
            <label htmlFor="" className="font-semibold text-[12px] 2xl:text-[15px] phone:text-[13px]">Senha</label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="******************"
                onChange={handleChange}
                errors={errors}
                className="h-[40px] w-[280px] 2xl:w-[400px] phone:w-[250px] phone:h-[40px] text-[12px] 2xl:text-[14px] border-2 rounded-[10px] p-[12px] pl-[40px] focus:outline-[#F59A73]"
              /> 
              <div className="absolute inset-y-0 left-0 pl-3  flex items-center pointer-events-none"> 
                  <img src={lock} alt="" className="" /> 
              </div> 
            </div>
      
          </div>
          <button type="submit" className="w-[280px] 2xl:w-[400px] phone:w-[250px] phone:h-[40px] phone:mt-[10px] phone:text-[14px] h-[40px] mt-[60px] bg-[#F59A73] rounded-[10px] font-inter font-bold text-white text-[18px] ">Cadastrar</button>
        </form>
        <div className="mt-[20px] phone:mt-[5px] flex flex-col items-center">
          <div className="text-[#7C7C8A] text-[14px] font-regular">Já possui conta?<Link to="/login" className="text-[#F59A73] text-[14px] phone:text-[12px] font-bold"> Login</Link></div>
        </div>
      </div>

    </div>
  );
};

export default CadastroEntidade;
