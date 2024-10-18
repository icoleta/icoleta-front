import React, {useEffect, useState} from "react";
import pointApi from "../../services/api/points";
import {useNavigate, useParams} from "react-router-dom";
import discardApi from "../../services/api/discards";
import { useAuth } from "../../contexts/auth";
import { toast, ToastContainer } from "react-toastify";

function ClaimDiscard() {
  const navigate = useNavigate();
  const { user } = useAuth()
  const {token} = useParams();

  const [residuums, setResiduums] = useState([]);
  const [points, setPoints] = useState([]);
  const [selectedResiduum, setSelectedResiduum] = useState(4);
  const [selectedPointId, setSelectedPointId] = useState(-1);
  const [selectedWeight, setSelectedWeight] = useState(0);

  useEffect(() => {
    pointApi.fetchPoints().then((res) => {
      setPoints(res.data);
      parseJwt(token);
    });
  },);

  useEffect(() => {
    if (points) {
      const pointIndex = points.findIndex(
        (point) => point.id === parseInt(selectedPointId)
      );
      if (pointIndex !== -1) {
        setResiduums(points[pointIndex].collectable_items);
      } else {
        setResiduums([]);
      }
    }
  }, [points, selectedPointId]);

  async function handleSubmit() {
    const autoCloseDelay = 5000

    const payload = {
      name: user.name,
      token,
      residuum_id: selectedResiduum,
      weight: selectedWeight
    }
    
    const res = await discardApi.createDiscardAsUser(payload);

    if (res.status === 201) {
      toast.success("Obrigado pelo descarte!", {
        position: "top-center",
        autoClose: autoCloseDelay
      });

    } else {
      toast.error("Falha ao descartar !", {
        position: "top-center",
        autoClose: autoCloseDelay
      });
    }

    setTimeout(() => {
      navigate("/");
    },autoCloseDelay);
  }

  function parseJwt(token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    const { weight, point_id, residuum_id } = JSON.parse(jsonPayload);
    console.log(weight, point_id, residuum_id);
    
    document.querySelector("#weight").value = weight;
    setSelectedWeight(weight)
    document.querySelector(`#point-${point_id}`)?.setAttribute("selected", "");
    document
      .querySelector(`#residuum-${residuum_id}`)
      ?.setAttribute("selected", "");
    setSelectedPointId(point_id);
  }

  function handleSelectResiduum(e) {
    setSelectedResiduum(e.target.value)
  }

  return (
    <div className="m-32">
      <form
        className="w-full bg-white rounded-lg shadow-md p-6"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="flex flex-col tablet:flex-row w-full">
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xt font-bold mb-2"
                htmlFor="email"
              >
                usuário
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="name"
                id="name"
                name="name"
                value={user?.name}
                required
                disabled
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xt font-bold mb-2"
                htmlFor="weight"
              >
                Peso do resíduo (g)
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="number"
                max="10000"
                id="weight"
                name="weight"
                required
                disabled
              />
            </div>

            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xt font-bold mb-2">
                Ponto de coleta
                <select className="block w-full mt-2 bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" disabled>
                  <option value="">Selecione um ponto</option>
                  {points &&
                    points.map((item) => (
                      <option
                        id={`point-${item.id}`}
                        key={item.id}
                        className="block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                        value={item.id}
                      >
                        {item.name}
                      </option>
                    ))}
                </select>
              </label>
            </div>
          </div>

          <div className="mx-auto -mb-6 pb-1 mt-2">
            <span className="text-center text-xl text-gray-700">
              Tipo de resíduo
            </span>
          </div>
          <div className="flex flex-col justify-center items-center w-full my-6">
            {residuums &&
              residuums.map((residuum, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={`residuum-${residuum.id}`}
                    className="my-2"
                    value={residuum.id}
                    checked={residuum.name === 'Metal'}
                    onChange={handleSelectResiduum}
                  />
                  <label htmlFor={`residuum-${residuum.id}`}>
                    {residuum.name}
                  </label>
                </div>
              ))}
          </div>
        </div>
        <div className="w-full md:w-full px-3 mb-6">
          <button
            type="button"
            onClick={handleSubmit}
            className="appearance-none block justify-center w-full bg-olive-green hover:bg-olive-green-dark text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            Cadastrar
          </button>
        </div> 
      </form>

      <ToastContainer  />
    </div>
  );
}

export default ClaimDiscard;
