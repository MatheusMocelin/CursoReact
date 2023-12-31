import { useState } from 'react';
import './App.css'
import MyComponents from './components/MyComponents'
import Title from './components/Title';

function App() {
  const n = 8;
  const [name] = useState ("Rogério");

  const redTitle = true;

  return (
    <div>
      {/*CSS Global*/}
      <h1>React com CSS</h1>
      {/*CSS de Componente*/}
      <MyComponents />
      <p>Este parágrafo é do App.js</p>
      {/*Inline CSS*/}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forms inline
      </p>
      {/*CSS Inline style dinâmico*/}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>CSS Dinâmico</h2>

      <h2 style={name === "Rogério" ? {color: "green", backgroundColor: "black"} : null } >
        Teste Nome
      </h2>
      {/*Classe Dinâmica*/}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
      {/* CSS Modules */}
      <Title/>
    </div>
  )
}

export default App
