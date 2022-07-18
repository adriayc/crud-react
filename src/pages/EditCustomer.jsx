import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Formulario from '../components/Formulario'

const EditCustomer = () => {
  return (
    <Container>
    <Typography component={'h2'} variant='h3' align='center'>Edit Customer</Typography>

    <Box sx={{
      marginTop: 10,
    }}>
      <Formulario />
    </Box>
</Container>
  )
}

export default EditCustomer