import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global'
import { Daddy } from './Pages/Daddy'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Daddy />
  </React.StrictMode>,
)
