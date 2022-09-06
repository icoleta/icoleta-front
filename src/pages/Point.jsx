import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import svg from "../assets/recycle_icon.png";

import pointImg from "../assets/ic.jpg";

import pointApi from "./../services/api/points";

function Point() {
  const { id } = useParams();
  const [point, setPoint] = useState(null);

  useEffect(() => {
    pointApi.fetchPoint(id).then((res) => {
      setPoint(res.data);
    });
  }, [id]);

  return (
    <div className="justify-center">
      <div className="flex m-8 items-center justify-center">
        <img src={svg} className="w-8 h-8 " alt="logo" />
        <h3 className="text-4xl text-center ml-2 font-bold text-gray-900 ">
          Sua Plataforma de Coleta de Resíduos
        </h3>
      </div>

      {point && (
        <div className="flex items-center justify-center">
          <div className="flex-col">
            <h3 className="text-center text-xl font-bold text-slate-800">
              {point.name}
            </h3>
            <img
              src={process.env.REACT_APP_BACKEND_URL + point.path}
              alt="foto do ponto de coleta"
              className="h-72 w-96 my-2"
            />
            <div>
              <span className="text-slate-600">Horário de atendimento: </span>
              <span className="text-slate-800 font-semibold">
                {point.hours}
              </span>
            </div>
            <div>
              <span className="text-slate-600">Contato: </span>
              <span className="text-slate-800 font-semibold">
                {point.phone}
              </span>
            </div>
            <div>
              <span className="text-slate-600">Materiais aceitos: </span>
              {point.collectable_items.map((material, id) => {
                return (
                  <span key={id} className="text-slate-800 font-semibold">
                    {id !== 0 ? (
                      <span style={{ margin: "0 0.25rem" }}>&bull;</span>
                    ) : (
                      ""
                    )}
                    {material.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Point;
