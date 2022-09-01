import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";

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
                    <div className="flex flex-col w-full mx-2 py-12 justify-between desktop:flex-row phone:mx-20">
                        <h2 className="text-white text-4xl">Bem vindo(a) {user?.name}!</h2>

                        <p className="mt-4 w-fit uppercase inline-block text-sm bg-sunset-orange text-white py-2 px-4 rounded font-semibold hover:bg-indigo-100">
                            Total descartado: {totalWeight / 1000}kg
                        </p>
                        <p className="mt-4 w-fit uppercase inline-block text-sm bg-sunset-orange text-white py-2 px-4 rounded font-semibold hover:bg-indigo-100">
                            Número de descartes: {discardCount}
                        </p>
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