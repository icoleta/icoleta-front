
// AREA DE COLETA
<div>
    <div className="text-center mt-8">
        <h2 className="text-4xl tracking-tight">
            Cadastrar descarte do usuário
        </h2>
    </div>

    <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form className="w-full  bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-wrap -mx-3 mb-6">

            <div className="flex w-full">
                    <div className="w-full md:w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xt font-bold mb-2" htmlFor='Password'>Hash identificadora de usuário</label>
                        <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='password' required/>
                    </div>
                    <div className="w-full md:w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xt font-bold mb-2" htmlFor='Password'>Voluntário que coletou</label>
                        <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='password' required/>
                    </div>
                </div>
                
                    <div className="flex w-full">
                        <div className="w-full md:w-full px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xt font-bold mb-2" htmlFor='Password'>Peso do resíduo</label>
                            <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='password' required/>
                        </div>

                        <div className="w-full md:w-full px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xt font-bold mb-2" htmlFor='Password'>Ponto de coleta</label>
                        <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='password' required/>
                    </div>
                </div>
                
                <div className="mx-auto -mb-6 pb-1 mt-2">
                    <span className="text-center text-xl text-gray-700">Tipo de resíduo</span>
                </div>
                <div className="flex items-center w-full mt-2">
                    <div className="w-6/12 md:w-1/3 px-3 pt-4 mx-2 ">
                        <button  title="Vidro" className='appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none'>
                            <svg xmlns="http://www.w3.org/2000/svg" color="#d48563"  className="icon icon-tabler icon-tabler-glass-full" width="45" height="45" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> 
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <line x1="8" y1="21" x2="16" y2="21" /> <line x1="12" y1="15" x2="12" y2="21" /> <path d="M17 3l1 7c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -7h10z" /> <path d="M6 10a5 5 0 0 1 6 0a5 5 0 0 0 6 0" /> 
                            </svg>
                        </button>
                    </div>
                    <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
                        <button title="Plástico" className="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" color="#d48563"  width="45" height="45" fill="currentColor" className="bi bi-archive-fill" viewBox="0 0 16 16"> <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/> </svg>
                        </button>
                    </div>
                    <div className="w-full md:w-1/3 px-3 pt-4 mx-2 ">
                        <button  title="Papel" className="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg"  color="#d48563"  width="45" height="45" fill="currentColor" className="bi bi-newspaper" viewBox="0 0 16 16"> <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/> <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/> </svg>
                        </button>
                    </div>
                    <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
                        <button title="Metal" className="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" color="#d48563" fill="currentColor" className="bi bi-bucket-fill" viewBox="0 0 16 16"> <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527z"/> </svg>
                        </button>
                    </div>
                    <div className="w-full md:w-1/3 px-3 pt-4 mx-2 ">
                        <button title="Pilha" className="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" color="#d48563"  className="icon icon-tabler icon-tabler-battery-3" width="45" height="45" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M6 7h11a2 2 0 0 1 2 2v.5a0.5 .5 0 0 0 .5 .5a0.5 .5 0 0 1 .5 .5v3a0.5 .5 0 0 1 -.5 .5a0.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2" /> <line x1="7" y1="10" x2="7" y2="14" /> <line x1="10" y1="10" x2="10" y2="14" /> <line x1="13" y1="10" x2="13" y2="14" /> </svg>
                        </button>
                    </div>

                </div>


            </div>
            <div className="w-full md:w-full px-3 mb-6">
                <button className="appearance-none block w-full bg-olive-green hover:bg-olive-green-dark text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight  focus:outline-none focus:bg-white focus:border-gray-500">Coletar</button>
            </div>
        </form>
    </div>

    <div className="text-center mt-12  mb-6">
        <h2 className="text-4xl tracking-tight">
            Histórico de descartes
        </h2>
    </div>

    <div className="flex flex-col justify-center">
        <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="py-3 px-6">
                        ID
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Nome do usuário
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
                    <th scope="col" className="py-3 px-6">
                        Editar
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Excluir
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b">
                    <th scope="row" className="py-4 px-6 font-bold text-lg text-orange-500 whitespace-nowrap">
                        1
                    </th>
                <td className="py-4 px-6 text-gray-700 font-semibold">
                    Pessoa 1
                </td>
                <td className="py-4 px-6">2.5kg</td>
                <td className="py-4 px-6">papel</td>
                <td className="py-4 px-6">IC - UFAL</td>
                <td className="py-4 px-6"> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                    </svg>
                </td>
                <td className="py-4 px-6"> <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="4" y1="7" x2="20" y2="7"></line>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path></svg>
                </td>
                </tr>
                <tr className="bg-white border-b">
                <th
                    scope="row"
                    className="py-4 px-6 font-bold text-lg text-orange-500 whitespace-nowrap"
                >
                    2
                </th>
                <td className="py-4 px-6 text-gray-700 font-semibold">
                    Pessoa 2
                </td>
                <td className="py-4 px-6">1.2kg</td>
                <td className="py-4 px-6">plástico</td>
                <td className="py-4 px-6">IC - UFAL</td>
                <td className="py-4 px-6"> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                    </svg>
                </td>
                <td className="py-4 px-6"> <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="4" y1="7" x2="20" y2="7"></line>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path></svg>
                </td>

                </tr>
                <tr className="bg-white">
                <th
                    scope="row"
                    className="py-4 px-6 font-bold text-lg text-orange-500 whitespace-nowrap"
                >
                    3
                </th>
                <td className="py-4 px-6 text-gray-700 font-semibold">
                    Pessoa 1
                </td>
                <td className="py-4 px-6">0.8kg</td>
                <td className="py-4 px-6">metal</td>
                <td className="py-4 px-6">IC - UFAL</td>
                <td className="py-4 px-6"> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                    </svg>
                </td>
                <td className="py-4 px-6"> <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="4" y1="7" x2="20" y2="7"></line>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path></svg>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>     

</div>