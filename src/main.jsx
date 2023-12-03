import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'
import { Home } from "./pages/home/index.jsx"
import GlobalStyle from "./styles/global.js"

import { Routes } from './routes/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
      <Home></Home>

    </ThemeProvider>
  </React.StrictMode>,
)
