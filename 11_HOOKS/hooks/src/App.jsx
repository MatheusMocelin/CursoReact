
import './App.css'

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'

import { HookUseContext } from './components/HookUseContext'

//Pages



function App() {

  return (
  <HookUseContext>
    <div className='App'>
      <h1>React Hooks</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>Sobre</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
  </div>
  </HookUseContext>
  )
}

export default App
