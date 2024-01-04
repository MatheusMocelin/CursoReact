import "./Navbar.css";

import { NavLink, Link } from "react-router-dom";


import React from 'react'

const Navbar = () => {
  return (
    <nav id="nav">
      <Link to="/">
        <h2>Projeto</h2>
      </Link>
      
      <ul id="nav-links">
       <>
           <li>
              <NavLink to="/login">Entrar</NavLink>
            </li>
            <li>
              <NavLink to="/cadastro">Cadastrar</NavLink>
            </li>
          </>
  
      </ul>
    </nav>

  )
}

export default Navbar

