import React from "react";

import { useNavigate } from "react-router-dom";

import useForm from "../../hooks/useForm";
import othersApi from "../../services/api/others";

function Feedback() {

    const navigate = useNavigate();
    const { values, errors, handleChange, handleSubmit } = useForm(whenSubmitted, [
        "name",
        "email",
        "message",
    ]);

    async function whenSubmitted() {
        const res = await othersApi.createFeedback(values);

        if (res.status === 201) {
            alert("Feedback enviado com sucesso.");
            navigate("/");
        }
    }

    return (
        <div className="flex justify-center">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-4xl font-bold my-8 text-center tracking-tight text-olive-green">
                        Envie-nos um Feedback
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Você pode entrar em contato conosco através do e-mail: <a className="font-bold text-olive-green transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 underline" href="mailto:icoleta2022@gmail.com" target="_blank">icoleta2022@gmail.com</a> ou <a href="https://www.instagram.com/icoleta_sustentavel/" className="font-bold text-olive-green transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:opacity-65 underline" target="_blank">Instagram</a>.
                        Além disso, pode nos enviar um feedback. Esta é a primeira versão do sistema, então contamos com seu feedback para melhorar sua experiêcia no sistema.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap gap-2 m-2">
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
                                </div>
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
                                ></textarea>
                            </div>
                            
                            <button className="flex mx-auto text-white bg-sunset-orange border-0 py-2 px-8 focus:outline-none hover:bg-sunset-orange-dark rounded text-lg">
                                Enviar
                            </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Feedback;