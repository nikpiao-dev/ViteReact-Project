import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from '../components/Test'
import User from '../components/User'
import Products from '../components/Products'
import Events from '../components/Events'

function App() {

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
      <h1>Vite + React App</h1>
      <div>
        <Test></Test>
        <User></User>
        <Products></Products>
        <Events></Events>
      </div>
    </>
  )
}

export default App
