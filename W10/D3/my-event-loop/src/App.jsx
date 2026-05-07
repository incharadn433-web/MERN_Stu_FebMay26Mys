import { useState } from 'react';
import { EventBasics } from './components/P1'
import { EventObject } from './components/P2'
import { PassingArguments } from './components/P3'
import { ParentComponent } from './components/P5'
import './App.css'

function App() {
  return (
    <>
      {/* <EventBasics /> */}
      {/* <EventObject /> */}
      {/* <PassingArguments /> */}
      <ParentComponent />
    </>
  )
}

export default App