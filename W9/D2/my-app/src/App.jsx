import { useState } from 'react'
import './App.css'
import { FunctionName } from './components/FunctionalCompOne.jsx'
import { FunctionalComponentsBasics } from './components/FunctionalComponentsBasics.jsx'
import { ClassComponentsBasics } from './components/ClassComponentsBasics.jsx'
import { FunctionalComp } from './components/FunctionalComponentsAdv.jsx'

function App() {
  return (
    //Fragment in React: <> </>
    <>
    <FunctionalComp />
    {/* <ClassComponentsBasics/> */}
    {/* Component name
      <FunctionName /> 
      <FunctionalComponentsBasics /> */}
    </>
  )
}

export default App
