import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import user_default from "../../assets/user_default.png";

import personApi from '../../services/api/person'

function PerfilUsuario() {
    const { user } = useAuth()

    const [discards, setDiscards] = useState([]);
    const [discardCount, setDiscardCount] = useState([]);
    const [totalWeight, setTotalWeight] = useState([]);
    const [summaryByResiduum, setSummaryByResiduum] = useState([])

    useEffect(() => {
        personApi.listUserDiscards()
            .then(res => {
                setDiscards(res.data.discards)
                setDiscardCount(res.data.discardsCount)
                setTotalWeight(res.data.totalWeightDiscarded)
                setSummaryByResiduum(Object.entries(res.data.summaryByResiduum))
            })
    }, [])

    return (
        <div className="bg-gray-100 sm:grid grid-cols-5 grid-rows-2 px-4 py-6 min-h-full space-y-6 sm:space-y-0 sm:gap-4">

            <div className="col-span-8 items-center"> 
                <div className=" flex col-span-4  bg-olive-green rounded-md flex items-center">
                    <div className="flex flex-col justify-center text-center">
                        <div className="shrink-0 mt-5 flex justify-center text-center">
                            <img className="h-20 w-20 object-cover rounded-full" src={user_default} alt="Foto atual de perfil" />
                        </div> 
                        <label className="block pt-2 flex justify-center text-center">
                            <span className="sr-only t-2">Escolher foto de perfil</span>
                            <input type="file" className="w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-sunset-orange file:text-almost-white
                            hover:file:bg-sunset-orange-dark
                            "/>
                        </label>
                    </div>
                    
                    <div className="flex flex-col w-full mx-2 py-12 justify-between tablet:flex-row phone:mx-20">
                        <h2 className="text-white text-4xl">Bem vindo(a) {user?.name}!</h2>

                        <div className="flex flex-col w-full laptop:w-fit mx-2 justify-center items-center tablet:justify-end phone:mx-2 phone:flex-row ">

                            <div className="p-4 m-4 w-1/2 justify-center text-center bg-sunset-orange text-white py-2 px-4 rounded">
                                <p className="leading-relaxed">Peso</p>
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">{totalWeight / 1000}kg</h2>
                                <p className="leading-relaxed">Total</p>
                            </div>

                            <div className="p-4 m-4 w-1/2 justify-center text-center bg-sunset-orange text-white py-2 px-4 rounded">
                                <p className="leading-relaxed">Descartes</p>
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">{discardCount}</h2>
                                <p className="leading-relaxed">Totais</p>
                            </div>

                            {/* <div className="p-4 m-4 tablet:w-1/3 w-1/2 justify-center text-center bg-sunset-orange text-white py-2 px-4 rounded">
                                <p className="leading-relaxed">Ranking</p>
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">1°</h2>
                                <p className="leading-relaxed">Geral</p>
                            </div> */}
                        </div>


                    </div>
                </div>

                <div className="text-center mt-12">
                    <h2 className="text-4xl tracking-tight text-olive-green">
                        Total Descartado Por Tipo
                    </h2>
                </div>

                <div className="container px-5 pt-10 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        {
                            summaryByResiduum.map(residuum => (
                                <div key={`${residuum[0]}-summary`} className="p-4 tablet:w-1/5 w-1/2">
                                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{residuum[1].weight / 1000}kg</h2>
                                    <p className="leading-relaxed">{residuum[0]}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="text-center mt-12  mb-6">
                    <h2 className="text-4xl tracking-tight text-olive-green">
                        Seu Histórico de Descartes
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
                                        Quantidade doada{" "}
                                        <span className="text-gray-400 font-normal">(grama)</span>
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
                                {
                                    discards.map((discard, index) => (
                                        <tr key={`discard-${index}`} className="bg-white border-b">
                                            <th scope="row" className="py-4 px-6 font-bold text-lg text-orange-500 whitespace-nowrap">
                                                {discard.created_at.substr(0, 10)}
                                            </th>
                                            <td className="py-4 px-6">{discard.weight}</td>
                                            <td className="py-4 px-6">{discard.residuum.name}</td>
                                            <td className="py-4 px-6">{discard.point.name}</td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PerfilUsuario;