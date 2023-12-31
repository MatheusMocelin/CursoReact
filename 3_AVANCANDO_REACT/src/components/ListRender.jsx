import React, { useState } from 'react'

//Renderização de Lista utilizando a function map
// E corrigindo o erro da propriedade key


const ListRender = () => {

    const [list] = useState(["Matheus", "Pedro", "Josias"]);

    const [user, setUsers] = useState([
        {id: 1, name: "Cidinha", age: 22},
        {id: 2, name: "Aparicida", age: 78},
        {id: 3, name: "Rogério", age: 55}
    ]);

// Previous state
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        console.log("Teste " + Math.random());
        console.log("Multiplicando " + (Math.random()* 4));
        console.log("Usando Floor " +  Math.floor(Math.random() * 4));
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    }

  return (
    <div>
        <ul>
           {list.map((item, i) => (
            <li key ={i}>{item}</li>
           ))}
        </ul>
        <ul>
            {user.map((user) => (
                <li key = {user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender