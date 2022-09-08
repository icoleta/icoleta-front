import React, { useEffect } from "react";

export default function Modal({ children, title, closeButtonText, showModalProp, onUpdateModalState }) {
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    setShowModal(showModalProp)
  }, [showModalProp])

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl">
                    {title}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative flex-auto">
                  {
                    children
                  }
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => onUpdateModalState(false)}
                  >
                    {closeButtonText ?? 'Fechar'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* background overlay */}
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}