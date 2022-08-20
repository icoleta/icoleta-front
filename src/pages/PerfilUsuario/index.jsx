import React from "react";

function PerfilUsuario() {
    return (
 

            <div class="bg-gray-100 sm:grid grid-cols-5 grid-rows-2 px-4 py-6 min-h-full space-y-6 sm:space-y-0 sm:gap-4">


                <div class="col-span-8 items-center"> 

                <div class=" flex col-span-4  bg-olive-green rounded-md flex items-center">
                    <div class="flex flex-col w-full mx-2 py-12 justify-between desktop:flex-row phone:mx-20">
                        <h2 class="text-white text-4xl">Bem vindo! Essa é sua hash para descarte:</h2>


                        <a href="#" class="mt-4 w-fit uppercase inline-block text-sm bg-sunset-orange text-white py-2 px-4 rounded font-semibold hover:bg-indigo-100">97a90717ca617830d1af7c02e172a6aa4405ad52</a>
                    </div>
                </div>

                    <div class="container px-5 pt-20 mx-auto">
                        <div class="flex flex-wrap -m-4 text-center">
                            <div class="p-4 tablet:w-1/5 w-1/2">
                                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7Kg</h2>
                                <p class="leading-relaxed">Papel</p>
                            </div>

                            <div class="p-4 tablet:w-1/5 w-1/2">
                                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7Kg</h2>
                                <p class="leading-relaxed">Metal</p>
                            </div>

                            <div class="p-4 tablet:w-1/5 w-1/2">
                                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7Kg</h2>
                                <p class="leading-relaxed">Plástico</p>
                            </div>

                            <div class="p-4 tablet:w-1/5 w-1/2">
                                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7Kg</h2>
                                <p class="leading-relaxed">Vidro</p>
                            </div>

                            <div class="p-4 tablet:w-1/5 w-1/2">
                                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7Kg</h2>
                                <p class="leading-relaxed">Pilha</p>
                            </div>
                            
                        </div>
                    </div>

                <div class="text-center mt-12  mb-6">
                    <h2 class="text-4xl tracking-tight text-olive-green">
                        Seu histórico de descartes
                    </h2>
                </div>

                <div className="flex flex-col justify-center">
                    <div className="overflow-x-auto relative">
                        <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Data
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Nome do voluntário
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Quantidade doada{" "}
                                    <span className="text-gray-400 font-normal">(kg)</span>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Material doado
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Ponto de coleta
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b">
                                <th scope="row" className="py-4 px-6 font-bold text-lg text-orange-500 whitespace-nowrap">
                                    22/08/2022
                                </th>
                            <td className="py-4 px-6 text-gray-700 font-semibold">
                                Pessoa 1
                            </td>
                            <td className="py-4 px-6">2.5kg</td>
                            <td className="py-4 px-6">papel</td>
                            <td className="py-4 px-6">IC - UFAL</td>
                           
                            </tr>
                            <tr className="bg-white border-b">
                            <th
                                scope="row"
                                className="py-4 px-6 font-bold text-lg text-orange-500 whitespace-nowrap"
                            >
                                22/08/2022
                            </th>
                            <td className="py-4 px-6 text-gray-700 font-semibold">
                                Pessoa 2
                            </td>
                            <td className="py-4 px-6">1.2kg</td>
                            <td className="py-4 px-6">plástico</td>
                            <td className="py-4 px-6">IC - UFAL</td>
                           

                            </tr>
                            <tr className="bg-white">
                            <th
                                scope="row"
                                className="py-4 px-6 font-bold text-lg text-orange-500 whitespace-nowrap"
                            >
                                23/08/2022
                            </th>
                            <td className="py-4 px-6 text-gray-700 font-semibold">
                                Pessoa 1
                            </td>
                            <td className="py-4 px-6">0.8kg</td>
                            <td className="py-4 px-6">metal</td>
                            <td className="py-4 px-6">IC - UFAL</td>
                           
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>     
            </div>
        </div>
    )
}

export default PerfilUsuario;