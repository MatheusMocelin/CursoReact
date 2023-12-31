import { useState } from "react";


const ManagerData = () => {
    let someData = 10;
    
// Utilizando o hook useState
    const [number, setNumber] = useState(someData)

  return (
    <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(30)}>Mudar o state</button>
    </div>
  )
}

export default ManagerData