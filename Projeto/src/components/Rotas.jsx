import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import NovoCadastro from '../pages/Cadastro/NovoCadastro'

const Rotas = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/home' element={<Home />}/> 
        <Route exact path='/cadastro' element={<NovoCadastro />}/> 
    </Routes>
  )
}

export default Rotas