import React from "react";

import { useNavigate } from "react-router-dom";

import useForm from "../../hooks/useForm";
import othersApi from "../../services/api/others";
import InputError from "../../components/Forms/InputError";
import { ToastContainer, toast } from "react-toastify";

function Feedback() {

    const navigate = useNavigate();
    const { values, errors, handleChange, handleSubmit } = useForm(whenSubmitted, [
        "name",
        "email",
        "reason",
        "message",
    ]);

    async function whenSubmitted() {
        const autoCloseDelay = 2000
        const res = await othersApi.createFeedback(values);
        if (res.status === 201) {
            toast.success("Feedback enviado com sucesso.", {
                position: "top-center",
                autoClose: autoCloseDelay
            });

            setTimeout(() => {
                navigate("/");
            },autoCloseDelay);
        }
    }

    return (
        <div className="flex justify-center bg-olive-green ">
            <div className="container tablet:px-5 laptop:px-[15%] py-24 mx-auto ">
                <div className="flex flex-col text-center w-full mb-12 text-white p-[5%] tablet:p-0">
                    <h1 className="sm:text-3xl text-4xl font-bold my-8 text-center tracking-tight ">
                        Envie-nos um Feedback
                    </h1>
                    <p className="mx-auto leading-relaxed text-base laptop:w-4/5">
                        Essa é a primeira versão do sistema, então nos ajude a melhorar sua experiência com o IColeta deixando uma sugestão ou reportando um problema.
                        Você também pode entrar em contato conosco através do e-mail: <a className="font-bold text-blue-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 underline" href="mailto:icoleta2022@gmail.com" target="_blank">icoleta2022@gmail.com</a> ou <a href="https://www.instagram.com/icoleta_sustentavel/" className="font-bold text-blue-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:opacity-65 underline" target="_blank">Instagram</a>.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="lg:w-1/2 md:w-2/3 mx-auto bg-white rounded-lg">
                    <div className="flex flex-wrap gap-2 m-2  px-[5%] py-[5%] ">
                        <div className="w-full laptop:flex  gap-2">
                                < div className = "grow">
                                    <label for="name" className="block leading-7 text-sm text-gray-600">
                                        Seu nome
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        onChange={handleChange}
                                        errors={errors}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />

                                    <InputError error = {errors.name}/>
                                </div>
                                <div className="grow">
                                    <label for="email" className="block leading-7 text-sm text-gray-600">
                                        Seu email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        onChange={handleChange}
                                        errors={errors}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                    <InputError error = {errors.email}/>
                                </div>
                        </div> 

                        <div className="grow">
                            <label for="reason" className="block leading-7 text-sm text-gray-600">
                                Motivo do contato
                            </label>
                            <select
                                id="reason"
                                name="reason"
                                onChange={handleChange}
                                errors={errors}
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                            >
                                <option value = 'melhoria'>Sugestão de melhoria</option>
                                <option value = 'problema'>Reportar um problema</option>
                            </select>
                        </div>

                        <div className="w-full">
                            <label
                                for="message"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Mensagem
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                onChange={handleChange}
                                errors={errors}
                                minLength={10}
                                maxLength={200}
                            ></textarea>
                            <InputError error = {errors.message}/>
                        </div>
                        
                        <button className="flex mx-auto text-white bg-sunset-orange border-0 py-2 px-8 focus:outline-none hover:bg-sunset-orange-dark rounded text-lg">
                            Enviar
                        </button>
                    </div>

                </form>
            </div>

            <ToastContainer /> 
        </div>
    );
}

export default Feedback;