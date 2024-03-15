import logo from "../../assets/logonova.svg";
import envelope from "../../assets/EnvelopeSimple.svg";
import useForm from "../../hooks/useForm";

const RecuperarSenha = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    whenSubmitted,
    ["email"]
  );

  async function whenSubmitted() {
    //await api.post("/send-reset-email", values);
    alert("Link para atualização de senha enviado por email");
  }

  return (
    <div className=" bg-[#4B9093] h-screen w-full">
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center border rounded-[20px] shadow-sm m-8 h-[600px] w-[500px] bg-white">
          <div className="flex flex-col justify-center items-center mb-[10px]">
            <img src={logo} alt="" />
            <h2 className="font-black text-[#4B9093] text-[33px]"><span className="text-[#F59A73]">IC</span>oleta</h2>
            <h3 className="font-mulish font-regular text-[24px]">Recuperar Senha</h3>
          </div>
          <form onSubmit={handleSubmit} className="">
            <div className="flex flex-col">
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
            <button type="submit" className="mt-[40px] bg-[#F59A73] border rounded-[10px] font-inter font-bold text-white text-[18px] w-[400px] h-[48px] ">Enviar email</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default RecuperarSenha;
