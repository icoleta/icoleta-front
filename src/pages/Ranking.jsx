import React, { useState } from "react";
import { useEffect } from "react";

import othersApi from "../services/api/others";

function Ranking() {
  const [rankingByCount, setRankingByCount] = useState([]);
  const [rankingByWeight, setRankingByWeight] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("Geral");
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    // othersApi.fetchRankingByDiscardCount().then(res => {
    //   setRankingByCount(res.data.data.ranking)
    // })

    othersApi.fetchRankingByWeightDiscarded().then((res) => {
      setRankingByWeight(res.data.data.ranking);
    });

    // Updates ranking every 30s
    const interval = setInterval(() => {
      othersApi.fetchRankingByWeightDiscarded().then((res) => {});

      setTime(Date.now());
    }, 30000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const filter = rankingByWeight.filter((item) => {
    return (
      item.person.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sum == Number(searchTerm)
    );
  });

  return (
    <div className="flex w-full flex-col items-center tablet:flex-row justify-center">
      <div className="flex flex-col mx-8 w-4/5">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="flex flex-col text-center justify-center items-center">
            <svg
              aria-hidden="true"
              className="w-10 h-10 text-sunset-orange"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <h3 className=" my-8 text-center text-4xl tracking-tight text-olive-green">
              Top Contribuidores do IColeta
            </h3>
            <div className="flex justify-center gap-2 m-8 w-full">
              <div className="flex flex-col items-center tablet:mx-4 mt-12 w-full">
                <div
                  className="bg-white drop-shadow-md rounded-lg flex flex-col justify-between w-full"
                >
                  <div className="flex items-center justify-start mb-4 p-6">
                    <p className="text-lg font-semibold text-sunset-orange mr-2">
                      2º
                    </p>
                  </div>
                  <div className="flex flex-col items-center w-full">
                    <div className="flex items-center justify-center mb-4 phone:w-[10vw] phone:h-[10vw] tablet:w-[10rem] tablet:h-[10rem] rounded-full bg-gray-200">
                      <svg
                        className="w-12 h-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-sunset-orange mb-2">
                      {rankingByWeight.length >= 2 &&
                        rankingByWeight[1].person.name}
                    </h4>
                  </div>
                  <div className="h-[50px] w-full border"></div>
                </div>
              </div>
              <div className="flex flex-col items-center tablet:mx-4 w-full">
                <div
                  className="bg-white drop-shadow-md rounded-lg flex flex-col justify-between w-full"
                >
                  <div className="flex items-center justify-start mb-4 p-6">
                    <p className="text-lg font-semibold text-sunset-orange mr-2">
                      1º
                    </p>
                  </div>
                  <div className="flex flex-col items-center w-full">
                    <div className="flex items-center justify-center rounded-full bg-gray-200 phone:w-[10vw] phone:h-[10vw] tablet:w-[10rem] tablet:h-[10rem]">
                      <svg
                        className="w-12 h-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-sunset-orange mb-2">
                      {rankingByWeight.length >= 1 &&
                        rankingByWeight[0].person.name}
                    </h4>
                  </div>
                  <div className="h-[50px] w-full border"></div>
                </div>
              </div>
              <div className="flex flex-col items-center tablet:mx-4 mt-12 w-full">
                <div
                  className="bg-white drop-shadow-md rounded-lg flex flex-col justify-between w-full"
                >
                  <div className="flex items-center justify-start mb-4 p-6">
                    <p className="text-lg font-semibold text-sunset-orange mr-2">
                      3º
                    </p>
                  </div>
                  <div className="flex flex-col items-center w-full">
                    <div className="flex items-center justify-center mb-4  rounded-full bg-gray-200 phone:w-[10vw] phone:h-[10vw] tablet:w-[10rem] tablet:h-[10rem]">
                      <svg
                        className="w-12 h-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-sunset-orange mb-2">
                      {rankingByWeight.length >= 3 &&
                        rankingByWeight[2].person.name}
                    </h4>
                  </div>
                  <div className="h-[50px] w-full border"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 tablet:gap-2 items-center justify-between my-5">
            <div className="w-full tablet:w-[400px] h-[60px] relative ">
              <input
                type="text"
                placeholder="Pesquise aqui..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-full pl-4 pr-12 py-2 shadow-md  border rounded-lg focus:outline-none focus:border-blue-500"
              />

              <svg
                className="absolute top-[-5rem] right-0 w-8 h-8 mt-24 mr-4 text-gray-400 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 20l-6-6M9 15a6 6 0 100-12 6 6 0 000 12z"
                />
              </svg>
            </div>

            <div className="flex justify-end  h-[45.11px] w-full tablet:w-[397.14px] drop-shadow-lg">
              <button
                className={`px-4 py-2  rounded-l-lg  w-full focus:outline-none ${
                  selectedFilter === "Geral"
                    ? "bg-sunset-orange text-white"
                    : "bg-gray-second text-gray-third"
                }`}
                onClick={() => setSelectedFilter("Geral")}
              >
                Geral
              </button>
              <button
                className={`px-4 py-2  w-full  focus:outline-none ${
                  selectedFilter === "Por Mês"
                    ? "bg-sunset-orange text-white"
                    : "bg-gray-second text-gray-third"
                }`}
                onClick={() => setSelectedFilter("Por Mês")}
              >
                Por Mês
              </button>
              <button
                className={`px-4 py-2 rounded-r-lg w-full  focus:outline-none ${
                  selectedFilter === "Por Ano"
                    ? "bg-sunset-orange text-white"
                    : "bg-gray-second text-gray-third"
                }`}
                onClick={() => setSelectedFilter("Por Ano")}
              >
                Por Ano
              </button>
            </div>
          </div>

          <div className="py-2 min-w-full phone:px-6 laptop:px-8">
            <div className="overflow-x-auto ">
              <table className="min-w-full ">
                <thead className="border-b rounded-md">
                  <tr>
                  <th
                      scope="col"
                      className="text-sm uppercase font-medium text-gray-900 px-6 py-4 text-left w-1/3"
                    >
                      Colocação
                    </th>
                    <th
                      scope="col"
                      className="text-sm uppercase font-medium text-gray-900 px-6 py-4 text-left w-1/3"
                    >
                      Nome do usuário
                    </th>
                    <th
                      scope="col"
                      className="text-sm uppercase font-medium text-gray-900 px-6 py-4 text-left w-1/3"
                    >
                      Quantidade doada (gramas)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filter
                    .filter((_, index) => index <= 19)
                    .map((pos, index) => (
                      <tr
                        key={`position-weight-${index}`}
                        className="bg-white border-b"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-sunset-orange">
                          {index + 1}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {pos.person.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {pos.sum}
                        </td>
                      </tr>
                    ))}
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
