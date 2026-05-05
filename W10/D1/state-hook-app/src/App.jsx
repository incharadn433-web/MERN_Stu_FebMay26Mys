import { useState } from 'react'
import { UseStateBasics } from './components/P1'
import { UpdatingObjectsArraysState } from './components/P2'
import { EventHandlingState } from './components/P3'
import { DerivedStateCondRender } from './components/P4'
import { USeEffectBasics } from './components/P5'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* <UseStateBasics/> */}
       {/* <UpdatingObjectsArraysState/> */}
       {/* <EventHandlingState/> */}
       {/* <DerivedStateCondRender/> */}
       <USeEffectBasics/>
    </>
  )
}

export default App
