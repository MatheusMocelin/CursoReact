import {useCallback, useState} from 'react'

import List from './List'

const HookUseCallback = () => {
    const [counter, setCounter] = useState(0)

    const getItemsFromsDatabase = useCallback(() => {
        return["a", "b", "c"]
    },[])

  return (
    <div>
        <h2>HookUseCallback</h2>
        <List getItems = {getItemsFromsDatabase} />
        <button onClick={() => setCounter(counter +1 )}>Alterar!</button>
        <p>{counter}</p>
        <hr />
    </div>
  )
}

export default HookUseCallback