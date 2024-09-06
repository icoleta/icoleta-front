import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import svg from "../../assets/recycle_icon.png";

import pointApi from "../../services/api/points";

function ListPoints() {
  // const navigate = useNavigate();
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
        <div className="flex text-center m-8 items-center justify-center">
          <img src={svg} className="w-8 h-8 mr-2" alt="logo" />
          <h3 className="text-4xl text-center font-bold text-gray-900 ">
            Confira os pontos de descarte cadastrados:
          </h3>

        </div>
        <div className="grid grid-cols-4 items-center justify-center px-16">
        {
          points.map((point) => {
            return (
              <Link key={'point_'+point.id} to={`/ponto/${point.id}`}>
                <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl mx-8 mb-8" key={point.id}>
                  <img src={point.image} alt="Ponto de coleta" className="h-auto w-full" />
    
                  <p className="mt-4 text-lg font-normal text-gray-800 p-5">
                    {point.name}
                  </p>
    
                  <span className="text-slate-500 p-5">
                    {point.collectable_items.map((material, id) => {
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
    
                  <div className="mt-4 p-5">
                    <p className="text-medium mb-5">{point.hours}</p>
                  </div>
                </div>
              </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ListPoints;
