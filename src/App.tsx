import { Grid } from '@mui/material'

import { Home } from './pages/Home'

import { Header } from './components/Header'

export const App = () => {
  return (
    <Grid container>
      <Header />
      <Home />
    </Grid>
  )
}
