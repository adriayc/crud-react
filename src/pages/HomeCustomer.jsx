import React from 'react'
import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const HomeCustomer = () => {
  return (
    <Container>
      <Typography component={'h2'} variant='h3' color={'#1b3380'}>Customers</Typography>
      <Typography component={'p'} variant='p'>Manage your Customers</Typography>

      <TableContainer>
        <Table sx={{marginTop: '30px'}}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Business</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Adriano Ayala</TableCell>
              <TableCell>
                <Typography component={'p'} variant='p'>
                  <Typography component={'span'} variant='subtitle2'>EMAIL: </Typography>adriano@gmail.com
                </Typography>
                <Typography component={'p'} variant='p'>
                  <Typography component={'span'} variant='subtitle2'>TELEPHONE: </Typography>70782047
                </Typography>
              </TableCell>
              <TableCell>AACSoft SA</TableCell>
              <TableCell sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <Button variant='contained' color='success' sx={{marginTop: '2px', marginBottom: '2px'}}>View</Button>
                <Button variant='contained' sx={{marginTop: '2px', marginBottom: '2px'}}>Edit</Button>
                <Button variant='contained' color='error' sx={{marginTop: '2px', marginBottom: '2px'}}>Remove</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default HomeCustomer