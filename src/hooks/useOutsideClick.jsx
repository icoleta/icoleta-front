import React, { useEffect } from "react";

function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      console.log(callback)
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

export default useOutsideClick;
