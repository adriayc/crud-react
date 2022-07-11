import React from 'react'
import { Outlet, Link as RouterLink } from 'react-router-dom'
import { Box, Container, Divider, Grid, Link, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography } from '@mui/material'
// import { HomeIcon, Add, ContentCut } from '@mui/icons-material'
// import DeleteIcon from '@mui/icons-material/Delete';

const Layout = () => {
  return (
    <Grid container spacing={2}>
      <Grid 
        item xs={3} 
        sx={{
          height: '100vh',
          color: 'white',
          backgroundColor: '#1b3380' 
        }}
      >
        <Container>
          <Typography align='center' component={'h1'} variant='h3'>CRUD - Customer</Typography>

          <Paper sx={{
            width: '100%', 
            maxWidth: '100%',
            backgroundColor: '#1b3380',
            marginTop: '20px',
            boxShadow: 'none'
          }}>
            <MenuList sx={{
              color: 'white',
            }}>
              <MenuItem>
                <ListItemText>
                  <Link component={RouterLink} to="/customer" underline="none" color={'white'}>{'Customer'}</Link>
                </ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemText>
                  <Link component={RouterLink} to="/customer/new" underline="none" color={'white'}>{'New Customer'}</Link>
                </ListItemText>
              </MenuItem>
            </MenuList>
          </Paper>

        </Container>
      </Grid>

      <Grid item xs={9}>
        <Outlet />
      </Grid>
    </Grid>
  )
}

export default Layout