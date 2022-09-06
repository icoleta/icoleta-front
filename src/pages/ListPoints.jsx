import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import svg from "../assets/recycle_icon.png";

// import points from "../data/points.json";
import point from "../assets/ic.jpg";

import pointApi from "./../services/api/points";

function ListPoints() {
  const navigate = useNavigate();
  const [points, setPoints] = useState([]);

  useEffect(() => {
    loadPoints();
  }, []);

  async function loadPoints() {
    pointApi.fetchPoints().then((res) => {
      setPoints(res.data);
      console.log(res.data);
    });
  }

  return (
    <div className="justify-center">
      <div className="flex m-8 items-center justify-center">
        <img src={svg} className="w-8 h-8 " alt="logo" />
        <h3 className="text-4xl text-center ml-2 font-bold text-gray-900 ">
          Sua Plataforma de Coleta de Resíduos
        </h3>
      </div>
      <div className="grid grid-cols-4 items-center justify-center px-16">
        {points.map((item) => {
          return (
            <div
              onClick={() => navigate(`/ponto/${item.id}`)}
              className="max-w-sm cursor-pointer overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl mx-8 mb-8"
              key={item.id}
            >
              <img
                src={point}
                alt="Ponto de coleta"
                className="h-auto w-full"
              />

              <p className="mt-4 text-lg font-normal text-gray-800 p-5">
                {item.name}
              </p>

              <span className="text-slate-500 p-5">
                {item.collectable_items.map((material, id) => {
                  return (
                    <span key={id}>
                      {id !== 0 ? (
                        <span style={{ margin: "0 0.25rem" }}>&bull;</span>
                      ) : (
                        ""
                      )}
                      {material.name}
                    </span>
                  );
                })}
              </span>

              {/* <div className="mt-4 p-5">
                  <p className="text-medium mb-5">
                    {item.address.neighborhood}, {item.address.street}
                  </p>
                  <p className="text-medium mb-5">
                    Aberto<span style={{ margin: "0 0.25rem" }}>&bull;</span>
                    Fecha 16:00
                  </p>
                </div> */}

              <div className="mt-4 p-5">
                <p className="text-medium mb-5">{item.hours}</p>
              </div>
            </div>
            // <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl mr-4">
            //   <img src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" className="h-auto w-full" />
            //   <div className="p-5">
            //     <p className="text-medium mb-5 text-gray-700">Produtos que recolhemos</p>
            //     <button className="w-full rounded-md  bg-sunset-orange  py-2 text-white hover: bg-sunset-orange-dark hover:shadow-md duration-75">Vidros</button>
            //   </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListPoints;
