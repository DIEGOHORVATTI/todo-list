import React from 'react'

import ReactDOM from 'react-dom/client'

import { Grid } from '@mui/material'

import { Header } from './components/Header.tsx'
import { Home } from './pages/Home.tsx'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=UnifrakturMaguntia&display=swap"
      rel="stylesheet"
    />

    <Grid container>
      <Header />
      <Home />
    </Grid>
  </React.StrictMode>
)
