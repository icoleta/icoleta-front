import React from "react";

function Input({ type, id, name, onChange, errors }) {
  return (
    <div className="flex flex-col">
      <input
        type={type}
        id={id}
        name={name}
        className={
          (errors[name] ? "border-red-300 " : "border-gray-300 ") +
          " h-[40px] w-[280px] 2xl:w-[400px] phone:w-[250px] phone:h-[35px] text-[12px] 2xl:text-[14px] border-2 rounded-[10px] p-[12px] pl-[40px] focus:outline-[#F59A73]"
        }
        onChange={onChange}
      />
      {errors[name] && (
        <span className="text-red-600">{errors[name]}</span>
      )}
    </div>
  );
}

export default Input;
