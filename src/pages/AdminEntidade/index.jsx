import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import pointApi from "./../../services/api/points";
import {useAuth} from "../../contexts/auth";
import { ToastContainer, toast } from "react-toastify";
import logo from "../../assets/logo-ufal.png";

const AdminEntidade = () => {
  const [points, setPoints] = useState([]);
  const {user} = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.registrationSuccess) {
      toast.success("Login realizado com sucesso!", {
        position: "bottom-right",
      });
    }
  }, [location]);

  useEffect(() => {
    getCompanyPoints();
  }, []);

  async function getCompanyPoints() {
    try {
      const response = await pointApi.fetchCompanyPoints();
      setPoints(response.data);
    } catch (error) {
      console.error("Error fetching points:", error);
    }
  }

  return (
    <>
      <main className="main-admin">
        <div className="flex justify-center my-12 container-md">
          <div className="container-entidade">
            <div className="logo-entidade">
              <img src={logo} alt=""></img>
            </div>
            <h3 className="text-xl">{user.name ?? ""}</h3>

            <div className="flex justify-center my-2">
              <Link
                to="/ponto/criar"
                className="appearance-none block w-fit bg-olive-green text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-olive-green-dark focus:outline-none focus:bg-white focus:border-gray-500"
              >
                Novo ponto
              </Link>
            </div>
          </div>

          <div className="container-pontos">
            <div className="text-4xl tracking-tight">Seus Pontos de Coleta</div>

            <div className="container-ponto flex flex-col">
              {points.map((point, index) => (
                <div
                  key={"point_" + index}
                  className="container-ponto border border-slate-300 rounded-md relative"
                >
                  <div className="ponto-img">
                    <img src={point.path} alt="Imagem do ponto"></img>
                  </div>
                  <div className="container-ponto-descricao py-2">
                    <h4 className="text-lg">{point.name}</h4>
                    <div className="itens-coletados">
                      {point.collectable_items.map((item, itemIndex) => {
                        return (
                          <span
                            key={`point_${index}_item_${itemIndex}`}
                            className="mr-1"
                          >
                            {item.name}
                            {itemIndex !==
                              point.collectable_items.length - 1 && (
                              <span> - </span>
                            )}
                          </span>
                        );
                      })}
                    </div>
                    <p className="obs-horario-ponto">{point.hours}</p>
                    <Link
                      to={{
                        pathname: `/ponto/editar/${point.id}`,
                        state: {pointData: point},
                      }}
                      className="bg-blue-500 text-white py-2 px-4 rounded-md absolute top-2 right-2"
                    >
                      Editar
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ToastContainer />
      </main>
    </>
  );
};

export default AdminEntidade;
