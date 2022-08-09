import React from 'react'
import './style.css'

const AdminEntidade = () => {
  return (
    <>
    <main class="main-admin">

        <div class="bg-gray-100 sm:grid grid-cols-5 grid-rows-2 px-4 py-6 min-h-full space-y-6 sm:space-y-0 sm:gap-4">

            <div class="col-span-4 items-center">
                <div class="text-center mt-12">
                    <h2 class="text-4xl tracking-tight">
                        Cadastrar descarte do usuário
                    </h2>
                </div>

                <div class="flex justify-center my-2 mx-4 md:mx-0">
                    <form class="w-full  bg-white rounded-lg shadow-md p-6">
                        <div class="flex flex-wrap -mx-3 mb-6">

                            <div class="w-full md:w-full px-3 mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-xt font-bold mb-2" for='Password'>Hash identificadora de usuário</label>
                                <input class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='password' required/>
                            </div>
                            <div class="w-full md:w-full px-3 mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-xt font-bold mb-2" for='Password'>Peso</label>
                                <input class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='password' required/>
                            </div>
                            
                            
                            <div class="mx-auto -mb-6 pb-1 mt-2">
                                <span class="text-center text-xl text-gray-700">Tipo de resíduo</span>
                            </div>
                            <div class="flex items-center w-full mt-2">
                                <div class="w-6/12 md:w-1/3 px-3 pt-4 mx-2 ">
                                    <button class='appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none'>
                                        <svg xmlns="http://www.w3.org/2000/svg" color="#d48563"  class="icon icon-tabler icon-tabler-glass-full" width="45" height="45" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> 
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="8" y1="21" x2="16" y2="21" /> <line x1="12" y1="15" x2="12" y2="21" /> <path d="M17 3l1 7c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -7h10z" /> <path d="M6 10a5 5 0 0 1 6 0a5 5 0 0 0 6 0" /> 
                                        </svg>
                                    </button>
                                </div>
                                <div class="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
                                    <button class="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" color="#d48563"  width="45" height="45" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16"> <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/> </svg>
                                    </button>
                                </div>
                                <div class="w-full md:w-1/3 px-3 pt-4 mx-2 ">
                                    <button class="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg"  color="#d48563"  width="45" height="45" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16"> <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/> <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/> </svg>
                                    </button>
                                </div>
                                <div class="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
                                    <button class="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" color="#d48563" fill="currentColor" class="bi bi-bucket-fill" viewBox="0 0 16 16"> <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527z"/> </svg>
                                    </button>
                                </div>
                                <div class="w-full md:w-1/3 px-3 pt-4 mx-2 ">
                                    <button class="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" color="#d48563"  class="icon icon-tabler icon-tabler-battery-3" width="45" height="45" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M6 7h11a2 2 0 0 1 2 2v.5a0.5 .5 0 0 0 .5 .5a0.5 .5 0 0 1 .5 .5v3a0.5 .5 0 0 1 -.5 .5a0.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2" /> <line x1="7" y1="10" x2="7" y2="14" /> <line x1="10" y1="10" x2="10" y2="14" /> <line x1="13" y1="10" x2="13" y2="14" /> </svg>
                                    </button>
                                </div>

                            </div>


                        </div>
                        <div class="w-full md:w-full px-3 mb-6">
                            <button class="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">Coletar</button>
                        </div>
                    </form>
                </div>

                <div class="text-center mt-12  mb-6">
                    <h2 class="text-4xl tracking-tight">
                        Histórico de descartes
                    </h2>
                </div>

                <div className="flex flex-col justify-center">

                    <div className="overflow-x-auto relative">
                        <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                            <th scope="col" className="py-3 px-6">
                                Colocação
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Nome
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Quantidade doada{" "}
                                <span className="text-gray-400 font-normal">(kg)</span>
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Material mais doado
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b">
                            <th
                                scope="row"
                                className="py-4 px-6 font-bold text-lg text-orange-500 whitespace-nowrap"
                            >
                                1º
                            </th>
                            <td className="py-4 px-6 text-gray-700 font-semibold">
                                Pessoa 1
                            </td>
                            <td className="py-4 px-6">2.5kg</td>
                            <td className="py-4 px-6">papel</td>
                            </tr>
                            <tr className="bg-white border-b">
                            <th
                                scope="row"
                                className="py-4 px-6 font-bold text-lg text-orange-500 whitespace-nowrap"
                            >
                                2º
                            </th>
                            <td className="py-4 px-6 text-gray-700 font-semibold">
                                Pessoa 2
                            </td>
                            <td className="py-4 px-6">1.2kg</td>
                            <td className="py-4 px-6">plástico</td>
                            </tr>
                            <tr className="bg-white">
                            <th
                                scope="row"
                                className="py-4 px-6 font-bold text-lg text-orange-500 whitespace-nowrap"
                            >
                                3º
                            </th>
                            <td className="py-4 px-6 text-gray-700 font-semibold">
                                Pessoa 3
                            </td>
                            <td className="py-4 px-6">0.8kg</td>
                            <td className="py-4 px-6">metal</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>

            </div>

            <div class="h-96 col-span-1 ">
                <div class="bg-white py-3 px-4 mb-4 rounded-lg flex justify-around items-center ">
                    <input type="text" placeholder="Buscar" class=" bg-gray-100 rounded-md  outline-none pl-2 ring-indigo-700 w-full mr-2 p-2" />
                    <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor ">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg></span>
                </div>

                <div class="bg-white rounded-md">
                    <h1 class="text-center text-xl bg-white py-2 rounded-md border-b-2 cursor-pointer"><a href="#" class="list-none text-olive-green">Área do ADMIN</a></h1>
                    <div class="bg-white rounded-md list-none  text-center ">
                        <li class="py-3 rounded-lg border-b-2 hover:bg-sunset-orange"><a href="#" class="list-none">Lista de usuários</a></li>
                        <li class="py-3 rounded-lg border-b-2 hover:bg-sunset-orange"><a href="#" class="list-none">Lista de Coletas</a></li>
                        <li class="py-3 rounded-lg border-b-2 hover:bg-sunset-orange"><a href="#" class="list-none">Lista de entidade</a></li>
                        <li class="py-3 rounded-lg hover:bg-sunset-orange"><a href="#" class="list-none">Lista de ponto</a></li>
                    </div>
                </div>
            </div>
        </div>

    </main>
    </>
  )
}

export default AdminEntidade
