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
    <div className="flex flex-col justify-center px-64">
      <h3 className="text-lg my-8 text-center font-semibold text-slate-900">
        Ranking Geral
      </h3>
      <div className="overflow-x-auto relative">
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
              {/* <th scope="col" className="py-3 px-6">
                Material mais doado
              </th> */}
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
                  {/* <td className="py-4 px-6">papel</td> */}
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Ranking;
