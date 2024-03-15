import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Memoria from './components/Services/Memoria.jsx'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Memoria>
      <HashRouter>
        <App />
      </HashRouter>
    </Memoria>
  </React.StrictMode>,
)
