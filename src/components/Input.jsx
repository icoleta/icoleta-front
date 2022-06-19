import React from "react";

function Input({ type, id, name, onChange }) {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block  w-full p-2.5"
        onChange={onChange}
      />
    </>
  );
}

export default Input;
