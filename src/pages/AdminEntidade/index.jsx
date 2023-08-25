import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import pointApi from "./../../services/api/points";
import {useAuth} from "../../contexts/auth";
import logo from "../../assets/logo-ufal.png";

const AdminEntidade = () => {
  const [points, setPoints] = useState([]);
  const {user} = useAuth();

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
              <img src={logo} alt="" className="inline-flex"></img>
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
            <div className="text-4xl tracking-tight p-2">Seus Pontos de Coleta</div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  {points.map((point, index) => (
    <div
      key={"point_" + index}
      className="border border-gray-300 rounded-md shadow-md flex"
    >
      <div className="w-1/3 h-32">
        <img
          src={point.path}
          alt="Imagem do ponto"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-grow p-4 flex flex-col justify-between">
        <div>
          <h4 className="text-xl font-semibold mb-2">{point.name}</h4>
          <div className="mb-2">
            {point.collectable_items.map((item, itemIndex) => (
              <span key={`point_${index}_item_${itemIndex}`} className="mr-1">
                {item.name}
                {itemIndex !== point.collectable_items.length - 1 && (
                  <span> - </span>
                )}
              </span>
            ))}
          </div>
          <p className="text-gray-600 mb-2">{point.hours}</p>

        <div className="flex flex-row gap-1 justify-end">
          <div className="bg-blue-500 text-white p-1 rounded-md mt-4">
          <Link
            to={{
              pathname: `/ponto/editar/${point.id}`,
              state: { pointData: point },
            }}
            className="hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Editar
          </Link>
          </div>

          <div className="bg-blue-500 text-white p-1 rounded-md mt-4">
          <Link
            to={{
              pathname: `/ponto/editar/${point.id}`,
              state: { pointData: point },
            }}
            className="hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Excluir
          </Link>
          </div>
          </div>
        </div>
       
      </div>
    </div>
  ))}
</div>


          </div>
        </div>
      </main>
    </>
  );
};

export default AdminEntidade;
