import { useState } from "react"

const ConditionalRender = () => {

    const [X] = useState(false);

    const [name, setName] = useState("Rogério")

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {X && <p>Se x for tue, SIM!</p>}
        {!X && <p>Agora X é falso</p>}
        <h1>If Ternário</h1>
        {name === "João" ? (
            <div>
                <p>O nome é João!</p>
            </div>
        ): (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}
        <div>
            <button onClick={() => setName("João")}>Clique Aqui</button>
        </div>
    </div>
  )
}

export default ConditionalRender