import React from 'react'
//useContext
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

import HookUseStates from '../components/HookUseStates'
import HookuseReducer from '../components/HookuseReducer'
import HookuseEffect from '../components/HookuseEffect'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'



const Home = () => {
  const {contextValue} = useContext(SomeContext);

  return (
    <div>
        <HookUseStates />
        <HookuseReducer />
        <HookuseEffect />
        <h2>UseContext</h2>
        <p>Valor do Context: {contextValue}</p>
        <hr />
        <HookUseRef />
        <HookUseCallback />
        <HookUseMemo />
        <HookUseLayoutEffect />
    </div>
  )
}

export default Home