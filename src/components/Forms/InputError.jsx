import { PiWarningCircle } from "react-icons/pi";


function InputError({error}){

    if(error){
        return (
            <p className="text-warning-red text-sm pb-1"> 
                <PiWarningCircle className="inline mr-1" /> 
                {error}
            </p>
        );
    }

    
}

export default InputError;