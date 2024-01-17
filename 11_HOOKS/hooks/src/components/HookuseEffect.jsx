import React from 'react'
import { useEffect, useState } from 'react'

const HookuseEffect = () => {
    //1 useEffect, sem depencia
    useEffect(() => {
        console.log("Estou sendo  executado")
    })

    const [number, setNumber] = useState(1);

    const changeSomething = () =>{
        setNumber(number + 1)
    }

    //2 - Array de deps. vazio - executa apenas uma vez

    useEffect(() => {
        console.log("Serei executado apenas uma vez")
    }, [])

    //3 - item no araay de deps.

    const [anotherNumber, setanotherNumber] = useState(0)

    useEffect(() => {
        if(anotherNumber > 0){
        console.log("Sou executado apenas quando muda o anotherNumber muda")
        }
    }, [anotherNumber])

    //4 - cleanup useEffect

    useEffect(() => {

        const timer = setTimeout(() => {
            console.log("Hello World")
        }, 2000)

        return () => clearTimeout(timer);
        
    }, [anotherNumber])

  return (
    <div>
        <h2>HookuseEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>Executar!</button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setanotherNumber(anotherNumber + 1)}>Mudar anotherNumber!</button>
        <hr />
    </div>
  )
}

export default HookuseEffect