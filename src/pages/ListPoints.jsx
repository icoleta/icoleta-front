import React from "react";

import points from "../data/points.json";
import point from "../assets/point.png";

function ListPoints() {
  return (
    <div className="flex items-center justify-center">
      {points.map((item) => {
        return (

          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl mr-4" key={item.id}>
              
            <img src={point} alt="Ponto de coleta" className="h-auto w-full" />

            <p class="mt-4 text-lg font-normal text-gray-800 p-5">{item.title}</p>

            <span className="text-slate-500 p-5">
              {item.materials.map((material, id) => {
                return (
                  <span key={id}>
                    {id !== 0 ? (
                      <span style={{ margin: "0 0.25rem" }}>&bull;</span>
                    ) : (
                      ""
                    )}
                    {material}
                  </span>
                );
              })}
            </span>
                
            <div className="mt-4 p-5">
              <p class="text-medium mb-5">
                {item.address.neighborhood}, {item.address.street}
              </p>
              <p class="text-medium mb-5">
                Aberto<span style={{ margin: "0 0.25rem" }}>&bull;</span>
                Fecha 16:00
              </p>
            </div>

          </div>
          // <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl mr-4">
          //   <img src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" class="h-auto w-full" />
          //   <div class="p-5">
          //     <p class="text-medium mb-5 text-gray-700">Produtos que recolhemos</p>
          //     <button class="w-full rounded-md  bg-sunset-orange  py-2 text-white hover: bg-sunset-orange-dark hover:shadow-md duration-75">Vidros</button>
          //   </div>
          // </div>

        );
      })}
    </div>
  );
}

export default ListPoints;
