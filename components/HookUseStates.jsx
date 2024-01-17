import {useState} from 'react'

const HookUseStates = () => {

    // 1 - UseState

    let userName = "João"

    const [name, setName] = useState("Rogério")

    const changeName = () => {
        
        userName = "João Batista"

        setName("Rogério Sakakibara")
    }

    // 2 - useState e input

    const [age, setAge] = useState(18)

    const handleSubmit = (e) => {
        e.preventDefault()

        // envio a uma API

        console.log(age)
    }

  return (
    <div>
        {/*1 - useState */}
        <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeName}>Mudar Nomes</button>

        {/* 2 - usestate e input */}
        <p>Digite a sua idade: </p>
        <form onSubmit={handleSubmit}>
            <input type="text" value={age} onChange={ (e) => setAge(e.target.value)} />
            <p>Sua idade é: {age}</p>

        <input type="submit" value="Enviar" />
        </form>
        <hr />
    </div>
  )
}

export default HookUseStates