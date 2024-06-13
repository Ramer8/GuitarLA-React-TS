import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// const div = document.getElementById('root')!
// poniendo el signo, le aseguramos al typescript que ese elemento no sera null, se lo garantizamos y que existe!
//( the sign "!") is: Assertion not null non null assertion operator