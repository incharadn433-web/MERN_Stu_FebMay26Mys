import { useState } from 'react'
import { UseStateBasics } from './components/P1'
import { UpdatingObjectsArraysState } from './components/P2'
import { EventHandlingState } from './components/P3'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* <UseStateBasics/> */}
       {/* <UpdatingObjectsArraysState/> */}
       <EventHandlingState/>
    </>
  )
}

export default App
