import { useEffect, useState } from "react";
import { UseToggle } from "../../hooks/useToggle";
import ConfirmModal from "../../components/Modal/ConfirmModal";


function Feedbacks() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [openModal, setOpenModal] = UseToggle();


    useEffect(() => {
        setFeedbacks([
            {
                id: '1',
                email: 'email@email.com',
                reason: 'melhoria',
                message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            },
            {
                id: '2',
                email: 'email@email.com',
                reason: 'melhoria',
                message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            },
            {
                id: '3',
                email: 'email@email.com',
                reason: 'melhoria',
                message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            }
        ]);
    }, [])

    const onDeleteCallback = () => {
        console.log("Excluido");
        setOpenModal()
    }


    return (
        <>
        
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

                            <tbody>
                                {
                                    feedbacks.map(feedback => (
                                        <tr>
                                            <td className="py-4 px-6 text-gray-700 font-semibold">{feedback.id}</td>
                                            <td className="py-4 px-6 text-gray-700 font-semibold">{feedback.email}</td>
                                            <td className="py-4 px-6 text-gray-700 font-semibold text-justify	">{feedback.reason}</td>
                                            <td className="py-4 px-6 text-gray-700 font-semibold">{feedback.message}</td>

                                            <td className="pointer py-4 px-6 text-red-500 font-semibold">
                                                <button onClick = {() => setOpenModal()} >
                                                    <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="icon icon-tabler icon-tabler-trash"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="2"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    >
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <line x1="4" y1="7" x2="20" y2="7"></line>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))

                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <ConfirmModal open = {openModal} onConfirm = {onDeleteCallback} onClose={setOpenModal}/>
    </>
    );
  }
  
  export default Feedbacks;
  