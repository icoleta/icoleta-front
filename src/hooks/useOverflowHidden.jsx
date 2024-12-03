import { useEffect, useState } from "react";

export function UseOverflowHidden(hidden = false){

    useEffect(() => {
        document.body.classList.add('overflow-x-hidden');
    
        if (hidden){
          document.body.classList.add('overflow-hidden');
    
        }else{
          document.body.classList.remove('overflow-hidden');
        }
    
        return () => {
          document.body.classList.remove('overflow-hidden')
          document.body.classList.remove('overflow-x-hidden');
        };
    
    }, [hidden]);
}