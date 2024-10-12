import { useState } from "react";

export function UseToggle(initValue = false){
    const [state, setState] = useState(initValue)

    function onToggle(){
        setState(!state);
    }

    return [state, onToggle]
}