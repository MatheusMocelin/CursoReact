import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import List from './pages/List'

function App() {

  return (
    <>
      <div className='app'>
        <h1>ContextAPI</h1>
        <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/list' element={<List/>} />
              <Route path='/about' element={<About/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
