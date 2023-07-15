import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> Fase 5 Operar </h1>
      <h1> Mi proyecto </h1>
      <div className="card">
       <h3> Presentado por: </h3>
       <h4> Lizeth Lorena Herrera Salamanca  </h4>

       <h6> Enlace al proyecto </h6>
       <a href="index2.html">Click aqui para ingresar</a>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
