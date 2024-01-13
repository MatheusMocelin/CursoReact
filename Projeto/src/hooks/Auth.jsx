import { useState } from "react"



export const Auth = () => {
    const [enter, setEnter] = useState(null);
    const login = (data) =>{
        
        if(data){
            setEnter(true);
        } else {
            setEnter(false);
        }
        }
  
    return {login, enter}
    
}

