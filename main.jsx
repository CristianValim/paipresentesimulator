import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './src/styles/global'
import { Daddy } from './src/Pages/Daddy'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Daddy />
  </React.StrictMode>,
)
