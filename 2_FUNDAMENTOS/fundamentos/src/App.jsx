import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//Components
import FirstComponent from "./components/FirstComponents";
import SecondComponent from './components/SecondComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

// styles / CSS
import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="card">
        <h1>
            FUNDAMENTOS REACT
        </h1>
        {/*<FirstComponent/>
        <TemplateExpressions/>
        <MyComponent/>
  <Events/>*/}

        <Challenge/>
      </div>
    </>
  )
}

export default App
