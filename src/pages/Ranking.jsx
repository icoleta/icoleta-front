import React, { useState } from "react";
import { useEffect } from "react";

import othersApi from '../services/api/others'

function Ranking() {
  const [ranking, setRanking] = useState([])

  useEffect(() => {
    othersApi.fetchRanking()
    .then(res => {
      setRanking(res.data.data.ranking)
    })
  }, [])
  
  return (

    <div className="flex flex-col mx-8">
      <h3 className=" my-8 text-center text-4xl tracking-tight text-olive-green">
        Ranking Geral
      </h3>
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-x-auto ">
                <table className="min-w-full ">
                  <thead className="border-b rounded-md">
                    <tr>
                      <th scope="col" className="text-sm uppercase font-medium text-gray-900 px-6 py-4 text-left">
                      Colocação
                      </th>
                      <th scope="col" className="text-sm uppercase font-medium text-gray-900 px-6 py-4 text-left">
                        Nome do usuário
                      </th>
                      <th scope="col" className="text-sm uppercase font-medium text-gray-900 px-6 py-4 text-left">
                        Quantidade doada{" "}
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {
                    ranking.map((pos, index) => (
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-sunset-orange">{index + 1}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {pos.person.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {pos.sum}
                        </td>
                      </tr>
                    ))

                  }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
      {/* <div className="overflow-x-auto relative">
        <table className="table-auto w-full text-sm text-left text-gray-500">
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
            </tr>
          </thead>
          <tbody>
            {
              ranking.map((pos, index) => (
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="py-4 px-6 font-bold text-lg text-orange-500 whitespace-nowrap"
                  >
                    {index + 1}
                  </th>
                  <td className="py-4 px-6 text-gray-700 font-semibold">
                    {pos.person.name}
                  </td>
                  <td className="py-4 px-6">{pos.sum}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div> */}
    </div>
  );
}

export default Ranking;
