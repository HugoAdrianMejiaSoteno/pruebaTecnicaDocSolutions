import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form/Form'
import { Contexto } from './components/Services/Memoria'
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import RegisteredUsers from './components/RegisteredUsers/RegisteredUsers'
import RegisterUser from './components/RegisterUser/RegisterUser'
// import { fetch1 } from './components/RegisteredUsers/prueba'
// import RegisterUser from './components/RegisterUser/RegisterUser'

function App() {
  const [count, setCount] = useState(0)
  const [authorized, setAuthorized, token, setToken,newUserWindow, setNewUserWindow] = useContext(Contexto)

  return (
    <>
      <div className='home'>
        <header className='titleHome'>
          <h1>Prueba Tecnica</h1>
        </header>
        {(!authorized && !newUserWindow) && <Form/>}
        {(authorized && !newUserWindow) && <Home/>}
        {(authorized && newUserWindow) && <RegisterUser/>}
      </div>
    </>
  )
}

export default App;
