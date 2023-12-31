
import './App.css'
import CarDetails from './components/CarDetails'

function App() {
  const cars = [
    {id: 1, brand: "Ferrari", km: 2121, color: "vermelha"},
    {id: 2, brand: "Renault", km: 22, color: "Preto"},
    {id: 3, brand: "Mitsubishi", km: 543543, color: "Roxo"},
    {id: 4, brand: "Toyota", km: 3334, color: "Branco"},
  ]

  return (
   <div>
    <h1>Desafio CSS</h1>
    
    <div>
      {cars.map((car) => (
        <CarDetails
          key = {car.id}
          brand = {car.brand}
          km = {car.km}
          color= {car.color}
        />
     ) )}
     </div>
     
   </div>
  )
}

export default App
