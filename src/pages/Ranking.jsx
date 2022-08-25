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
      <div className="flex text-center justify-center items-center">
        <svg aria-hidden="true" class="w-10 h-10 text-sunset-orange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <h3 className=" my-8 text-center text-4xl tracking-tight text-olive-green">
          Ranking Geral
        </h3>
      </div>
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
