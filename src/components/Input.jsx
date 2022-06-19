import React from "react";

function Input({ type, id, name, onChange, errors }) {
  return (
    <div>
      <input
        type={type}
        id={id}
        name={name}
        className={
          (errors[name] ? "border-red-300 " : "border-gray-300 ") +
          "bg-gray-50 border text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full p-2.5"
        }
        onChange={onChange}
      />
      {errors[name] && (
        <span className="text-red-600 absolute">{errors[name]}</span>
      )}
    </div>
  );
}

export default Input;
