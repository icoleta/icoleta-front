import React, { useEffect, useState } from "react";
import edit_icon from "../../assets/edit_icon.png"
import { useAuth } from "../../contexts/auth";
import user_default from "../../assets/user_default.jpg";

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

            <div className="col-span-8 items-center ">
                <div className=" col-span-4  bg-olive-green rounded-md px-5 tablet:px-20 py-12 ">
                    <h2 className="text-white text-4xl text-center">Bem vindo(a) {user?.name}!</h2>

                    <div className="flex justify-between items-center  " >
                        <div>
                            <label for="profile-img">
                                <div className=" shrink-0 mt-5 flex justify-center h-20 w-20 rounded-full  relative text-center border-4 bg-gray-50	 border-solid group hover:cursor-pointer">
                                    <img className="bg-neutral-400	 w-full object-cover rounded-full group-hover:brightness-50" src={user_default} alt="Foto atual de perfil" />
                                    <img src={edit_icon} alt="Editar" className="w-7 absolute left-6 top-6 text-white hidden	 group-hover:block " />
                                </div>
                            </label >
                            <input type="file" id="profile-img" className="hidden" />
                        </div>

                        <div className="flex flex-col justify-between tablet:flex-row ">

                            <div className="flex flex-col laptop:w-fit mx-2 justify-center items-center tablet:justify-end phone:mx-2 phone:flex-row ">

                                <div className="p-4 m-4 w-full sm:w-fit justify-center text-center bg-sunset-orange text-white py-2 px-4 rounded">
                                    <p className="leading-relaxed">Peso</p>
                                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">{totalWeight / 1000}kg</h2>
                                    <p className="leading-relaxed">Total</p>
                                </div>

                                <div className="p-4 m-4 w-full sm:w-fit justify-center text-center bg-sunset-orange text-white py-2 px-4 rounded">
                                    <p className="leading-relaxed">Descartes</p>
                                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">{discardCount}</h2>
                                    <p className="leading-relaxed">Totais</p>
                                </div>
                            </div>
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