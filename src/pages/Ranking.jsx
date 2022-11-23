import React, { useState } from "react";
import { useEffect } from "react";

import othersApi from '../services/api/others'

function Ranking() {
  const [rankingByCount, setRankingByCount] = useState([])
  const [rankingByWeight, setRankingByWeight] = useState([])
  const [time, setTime] = useState(Date.now())

  useEffect(() => {
    // othersApi.fetchRankingByDiscardCount().then(res => {
    //   setRankingByCount(res.data.data.ranking)
    // })

    othersApi.fetchRankingByWeightDiscarded().then(res => {
      setRankingByWeight(res.data.data.ranking)
    })

    // Updates ranking every 30s
    const interval = setInterval(() => {
      othersApi.fetchRankingByWeightDiscarded().then(res => {
        setRankingByWeight(res.data.data.ranking)
      })

      setTime(Date.now())
    }, 30000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="flex w-full flex-col tablet:flex-row justify-center">
      {/* <div className="flex flex-col mx-8">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="flex text-center justify-center items-center">
            <svg aria-hidden="true" className="w-10 h-10 text-sunset-orange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <h3 className=" my-8 text-center text-4xl tracking-tight text-olive-green">
              Ranking por Descartes
            </h3>
          </div>
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-x-auto ">
              <table className="min-w-full ">
                <thead className="border-b rounded-md">
                  <tr>
                    <th scope="col" className="text-sm uppercase font-medium text-gray-900 px-6 py-4 text-left w-1/3">
                      Colocação
                    </th>
                    <th scope="col" className="text-sm uppercase font-medium text-gray-900 px-6 py-4 text-left w-1/3">
                      Nome do usuário
                    </th>
                    <th scope="col" className="text-sm uppercase font-medium text-gray-900 px-6 py-4 text-left w-1/3">
                      Número de descartes
                    </th>

                  </tr>
                </thead>
                <tbody>
                  {
                    rankingByCount.map((pos, index) => (
                      <tr key={`position-count-${index}`} className="bg-white border-b">
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
      </div> */}

      <div className="flex flex-col mx-8">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="flex text-center justify-center items-center">
            <svg aria-hidden="true" className="w-10 h-10 text-sunset-orange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <h3 className=" my-8 text-center text-4xl tracking-tight text-olive-green">
              Ranking por Peso
            </h3>
          </div>
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-x-auto ">
              <table className="min-w-full ">
                <thead className="border-b rounded-md">
                  <tr>
                    <th scope="col" className="text-sm uppercase font-medium text-gray-900 px-6 py-4 text-left w-1/3">
                      Colocação
                    </th>
                    <th scope="col" className="text-sm uppercase font-medium text-gray-900 px-6 py-4 text-left w-1/3">
                      Nome do usuário
                    </th>
                    <th scope="col" className="text-sm uppercase font-medium text-gray-900 px-6 py-4 text-left w-1/3">
                      Quantidade doada (gramas)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    rankingByWeight.map((pos, index) => (
                      <tr key={`position-weight-${index}`} className="bg-white border-b">
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
      </div>
    </div>
  );
}

export default Ranking;
