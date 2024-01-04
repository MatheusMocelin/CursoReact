
import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/Home/Home'
import NovoCadastro from './pages/Cadastro/NovoCadastro';
import Login from './pages/Login/Login'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import RecuperarSenha from './pages/RecuperarSenha/RecuperarSenha';


function App() {
 
  return (
   
   <div>
   <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login"  element={<Login />} />
            <Route path="/cadastro" element={<NovoCadastro />} />  
            <Route path="/recuperarsenha" element={<RecuperarSenha />} />                    
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
   </div>
  )
}

export default App
