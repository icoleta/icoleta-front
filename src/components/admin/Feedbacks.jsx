function Feedbacks() {
    return (
        <div className="col-span-4 items-center">
            <div className="text-center mt-12  mb-6">
                <h2 className="text-4xl tracking-tight">Feedbacks dos usuários</h2>
            </div>
    
            <div className="flex flex-col justify-center">
                <div className="overflow-x-auto relative">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                            ID
                            </th>
                            <th scope="col" className="py-3 px-6">
                            email
                            </th>
                            <th scope="col" className="py-3 px-6">
                            motivo
                            </th>
                            <th scope="col" className="py-3 px-6">
                            descrição
                            </th>
                            <th scope="col" className="py-3 px-6">
                            Excluir
                            </th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>

    );
  }
  
  export default Feedbacks;
  