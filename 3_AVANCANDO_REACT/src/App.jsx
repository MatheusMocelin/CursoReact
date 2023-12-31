import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import City from "./assets/city.jpg"
import ManagerData from './components/ManagerData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Frangments from './components/Frangments'
import Conatiner from './components/Conatiner'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'
import UserDetails from './components/userDetails'



function App() {

  const name = "João";
  const [setName] = useState("Rogério")

  const Cars = [
    {id: 1, brand: "KIA", color: "Branco", km: 222, newCar: false},
    {id: 2, brand: "Ferrari", color: "Amarela", km: 0, newCar: true},
    {id: 3, brand: "Renault", color: "Prata", km: 22, newCar: false},
  ];

  const Pessoas = [
    {id: 1, nome: "Rogério", idade: 39, profissao: "Analista"},
    {id: 2, nome: "João", idade: 12, profissao: "Vendedor"},
    {id: 3, nome: "Matheus", idade: 25, profissao: "Motorista"},
    {id: 4, nome: "Fabio", idade: 18, profissao: "Desenvolvedor"},
  ];

  function showMessage(){
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
      setMessage(msg);
  };

  return (
    <>
      <div>
        <h1>Avançando no React</h1>
        {/*Imagem em public*/}
        <div>
          <img src="/img1.jpg" alt="Paisagem" />
        </div>
        {/*Imagem em asset*/}
        <div>
           <img src={City} alt="Cidade" />
        </div>
        <ManagerData/>
        <ListRender/>
        <ConditionalRender/>
        {/**/}
        <ShowUserName name = {setName}/>
        {/*Destructuring*/}
        <CarDetails brand="Fiat" km = {5000} color = "Black" newCar = {false}/>

        {/*Reaproveitando Compoente*/}
        <CarDetails brand="Ford" km = {0} color = "Red" newCar = {true}/>
        <CarDetails brand="Chev" km = {45487} color = "White" newCar = {false}/>
        <CarDetails brand="Citroen" km = {10} color = "Purple" newCar = {false}/>
        {/*Loop em array de objetos*/}
        {Cars.map((car) => (
          <CarDetails 
                      key = {car.id}
                      brand={car.brand}
                      color={car.color}
                       km={car.km}
                      newCar={car.newCar}/>
        ))}
        <Frangments propFragment = "Teste porra"/>
        {/*Children*/}
        <Conatiner myValue = "Testing">
          <p>Este é o conteúdo</p>
        </Conatiner>

        <Conatiner myValue = "Testing 2">
          <h5>Testandor Container</h5>
        </Conatiner>

        {/*Execução função*/}
        <ExecuteFunction myFunction={showMessage}/>

          {/*state lift*/}
          <Message msg = {message}/>
          <ChangeMessage handleMessage = {handleMessage}/>
          
          
          {Pessoas.map((pessoa) => (
            <UserDetails
                      key = {pessoa.id}
                      nome = {pessoa.nome}
                      idade = {pessoa.idade}
                      profissao = {pessoa.profissao}
            />
         ))}


      </div>
    </>
  )
}

export default App
