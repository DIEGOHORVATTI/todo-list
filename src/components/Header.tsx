import { Grid, Typography } from '@mui/material'

import Logo from '../assets/logo.svg'
import { Iconify } from './Iconify'

export const Header = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: '#000000',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Grid item>
        <img src={Logo} width={100} height={100} alt="Logo" />
      </Grid>

      <Grid item>
        <Grid container spacing={0.5} alignItems="center">
          <Grid item>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontFamily: 'UnifrakturMaguntia, sans-serif'
              }}
            >
              Todo List
            </Typography>
          </Grid>

          <Grid item>
            <Iconify icon="basil:edit-solid" size={3} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
