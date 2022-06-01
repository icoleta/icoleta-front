import React from "react";

import points from "../data/points.json";
import point from "../assets/point.png";

function ListPoints() {
  return (
    <div className="flex items-center justify-center">
      {points.map((item) => {
        return (
          <div className="shadow p-6 m-6 rounded" key={item.id}>
            <div className="flex">
              <img src={point} alt="Ponto de coleta" className="h-48 w-72" />
              <div className="ml-4">
                <h4>{item.title}</h4>
                <span className="text-slate-500">
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
                <div className="mt-4">
                  <span>
                    {item.address.neighborhood}, {item.address.street}
                  </span>
                  <span>
                    Aberto<span style={{ margin: "0 0.25rem" }}>&bull;</span>
                    Fecha 16:00
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListPoints;
