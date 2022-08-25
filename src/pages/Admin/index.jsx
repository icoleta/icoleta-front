import React, { useEffect, useState } from 'react'
import './style.css'
import AreaAdmin from "../../components/admin/AreaAdmin";
import Discards from "../../components/admin/Discards";
import Residuum from "../../components/admin/Residuum";
import Users from "../../components/admin/Users";
import Companies from "../../components/admin/Companies";

const AdminEntidade = () => {
  const [selectedItem, setSelectedItem] = useState("discards");
    
  return (
    <>
      <main className="main-admin">
        <div className="bg-gray-100 phone:grid grid-cols-5 grid-rows-2 px-4 py-6 min-h-full space-y-6 phone:space-y-0 phone:gap-4">
          {
            {
              area: <AreaAdmin />,
              discards: <Discards />,
              residuum: <Residuum />,
              users: <Users />,
              companies: <Companies />,
            }[selectedItem]
          }

          <div className="h-96 col-span-1 ">
            <div className="bg-white py-3 px-4 mb-4 rounded-lg flex justify-around items-center ">
              <input
                type="text"
                placeholder="Buscar"
                className=" bg-gray-100 rounded-md  outline-none pl-2 ring-indigo-700 w-full mr-2 p-2"
              />
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
            </div>

            <div className="bg-white rounded-md">
              <h1 className="text-center text-xl bg-white py-2 rounded-md border-b-2 cursor-pointer">
                <a href="#" className="list-none text-olive-green"
                  onClick={() => setSelectedItem("area")}>
                  Área do ADMIN
                </a>
              </h1>
              <div className="bg-white rounded-md list-none  text-center ">
                <li
                  className={
                    "py-3 rounded-lg border-b-2 hover:bg-sunset-orange" +
                    (selectedItem === "discards" ? " bg-orange-200" : "")
                  }
                  onClick={() => setSelectedItem("discards")}
                >
                  <a href="#" className="list-none">
                    Descartes
                  </a>
                </li>
                <li
                  className={
                    "py-3 rounded-lg border-b-2 hover:bg-sunset-orange" +
                    (selectedItem === "companies" ? " bg-orange-200" : "")
                  }
                  onClick={() => setSelectedItem("companies")}
                >
                  <a href="#" className="list-none">
                    Entidades
                  </a>
                </li>
                <li
                  className={
                    "py-3 rounded-lg border-b-2 hover:bg-sunset-orange" +
                    (selectedItem === "residuum" ? " bg-orange-200" : "")
                  }
                  onClick={() => setSelectedItem("residuum")}
                >
                  <a href="#" className="list-none">
                    Resíduos
                  </a>
                </li>
                <li
                  className={
                    "py-3 rounded-lg hover:bg-sunset-orange" +
                    (selectedItem === "users" ? " bg-orange-200" : "")
                  }
                  onClick={() => setSelectedItem("users")}
                >
                  <a href="#" className="list-none">
                    Usuários
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminEntidade;
