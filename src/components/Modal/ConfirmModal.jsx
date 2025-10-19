import { IoMdClose } from "react-icons/io";
import { UseOverflowHidden } from "../../hooks/useOverflowHidden";

const ConfirmModal = ({open, onConfirm, onClose }) => {
    UseOverflowHidden(open);

    if (!open) return null;

    return (
        <div 
            onClick = {() => onClose()} 
            className="bg-black/50 w-full h-full top-0 left-0 fixed z-10 "
        >
            <div 
                onClick={(e) => e.stopPropagation()}
                className="bg-white phone:w-[80%] tablet:w-[60%] laptop:w-[40%] rounded-3xl m-[0.5rem]  phone:m-auto px-[1rem] pt-[1rem] pb-[2rem] relative top-[50%] translate-y-[-50%]"
            >
                
                <div className="w-full flex justify-end "> 
                    <button onClick = {() => onClose()} className="hover:bg-slate-200 p-2 rounded-full">
                        <IoMdClose className="text-2xl"/> 
                    </button>
                </div>
               
                <div className="px-[0.5rem] laptop:px-[4rem] text-center 	">
                    <h2 className="pb-[0.5rem] text-3xl font-bold">Confirmar ação?</h2>
                    <p className="text-lg pb-[1rem]">Essa ação é permamente e não pode ser desfeita.</p>

                    <div className="flex justify-center gap-4">
                        <button 
                            onClick={() => onClose()}
                            className="border hover:bg-slate-200 border-black text-black rounded-md py-3 px-8 font-bold">
                            Cancelar
                        </button>
                        <button 
                            onClick={() => onConfirm()}
                            className="border border-sunset-orange bg-sunset-orange hover:bg-sunset-orange-dark hover:border-sunset-orange-dark text-white rounded-md py-3 px-8  text-md font-bold	">
                            Confirmar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default ConfirmModal;