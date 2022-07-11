import React from 'react'
import { Box, Button, Container, FormControl, InputLabel, TextField, Typography } from '@mui/material'

const NewCustomer = () => {
  return (
    <Container>
        <Typography component={'h2'} variant='h3' align='center'>New Clientes</Typography>

        <Box sx={{marginTop: 10}}>
          <form>
            <FormControl fullWidth sx={{marginBottom: 2}}>
              {/* <InputLabel>Name:</InputLabel> */}
              <TextField
                required
                id='name'
                label='Name'
              />
            </FormControl>
            <FormControl fullWidth sx={{marginBottom: 2}}>
              <TextField
                required
                id='business'
                label='Business'
              />
            </FormControl>
            <FormControl fullWidth sx={{marginBottom: 2}}>
              <TextField
                required
                id='email'
                label='Email'
              />
            </FormControl>
            <FormControl fullWidth sx={{marginBottom: 2}}>
              <TextField
                required
                id='telephone'
                label='Telephone'
              />
            </FormControl>
            <FormControl fullWidth sx={{marginBottom: 2}}>
              <TextField
                required
                id='note'
                label='Note'
                multiline
                rows={4}
              />
            </FormControl>

            <Box sx={{
              textAlign: 'center',
              marginTop: 2
            }}>
              <Button variant='contained'>Add</Button>
            </Box>
          </form>
        </Box>
    </Container>
  )
}

export default NewCustomer