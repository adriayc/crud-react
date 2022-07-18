import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Formulario from '../components/Formulario'

const NewCustomer = () => {
  return (
    <Container>
        <Typography component={'h2'} variant='h3' align='center'>New Customer</Typography>

        <Box sx={{
          marginTop: 10,
        }}>
          <Formulario />
        </Box>
    </Container>
  )
}

export default NewCustomer