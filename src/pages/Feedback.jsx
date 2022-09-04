import React from "react";

function Feedback() {
  return (
    <div className="flex justify-center">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-4xl font-bold my-8 text-center text-4xl tracking-tight text-olive-green">Envie-nos um Feedback</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Esta é a primeira versão do sistema, então contamos com seu feedback para melhorar sua experiêcia no sistema.  </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                <div className="relative">
                    <label for="name" className="leading-7 text-sm text-gray-600">Seu nome</label>
                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                </div>
                <div className="p-2 w-1/2">
                <div className="relative">
                    <label for="email" className="leading-7 text-sm text-gray-600">Seu email</label>
                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                </div>
                <div className="p-2 w-full">
                <div className="relative">
                    <label for="message" className="leading-7 text-sm text-gray-600">Mensagem</label>
                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                </div>
                <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-sunset-orange border-0 py-2 px-8 focus:outline-none hover:bg-sunset-orange-dark rounded text-lg">Enviar</button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                    <a className="text-olive-green">icoleta2022@gmail.com</a>
                    <div className="flex text-center justify-center items-center">
                        <p className="leading-normal my-5">Ou entre em contato conosco pelo instagram</p>
                        <span className="inline-flex">
                            
                            <a className="ml-4 text-olive-green  hover:text-olive-green-dark " href="https://www.instagram.com/icoleta_sustentavel/" target="_blank" >
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                            </a>
                            
                        </span>

                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Feedback;
