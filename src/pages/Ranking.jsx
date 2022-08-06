import React from "react";
import { FaMapMarkedAlt, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";

function Ranking() {
  return (
    <div className="flex flex-col justify-center px-64">
      <h3 className="text-lg my-8 text-center font-semibold text-slate-900">
        Ranking Geral
      </h3>
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
  );
}

export default Ranking;
