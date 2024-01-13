
import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NovoCadastro from './pages/Cadastro/NovoCadastro';
import RecuperarSenha from './pages/RecuperarSenha/RecuperarSenha';
import Rotas from './components/Rotas';
import Layout from 'antd/es/layout/layout';


function App() {
 
  return (
   
   <>
   
        {/*<Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login"  element={<Login />} />
            <Route path="/cadastro" element={<NovoCadastro />} />  
            <Route path="/recuperarsenha" element={<RecuperarSenha />} />                    
          </Routes>
        </div>
  <Footer />*/}
  
      <Rotas />
  
</>
   
  )
}

export default App
