import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import CustomerRow from '../components/CustomerRow';

const HomeCustomer = () => {

  const navigate = useNavigate();

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const queryAPI = async () => {
      const url = import.meta.env.VITE_API_JSON_SERVER
      const { data } = await axios.get(url)

      setCustomers(data)
    }

    queryAPI()
  }, [])

  // console.log(customers)
  // console.log(Object.keys(customers).length)

  const handleEliminar = async (id) => {
    const url = import.meta.env.VITE_API_JSON_SERVER +"/"+ id
    await axios.delete(url)

    // location.reload()

    const updateCustomers = customers.filter(customer => customer.id !== id)
    setCustomers(updateCustomers);
  }

  return (
    <Container>
      <Typography component={'h2'} variant='h3' color={'#1b3380'}>Customers</Typography>
      <Typography component={'p'} variant='p'>Manage your Customers</Typography>

      {Object.keys(customers).length > 0 ? (
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
              
              {customers.map(customer => (
                <CustomerRow
                  key={customer.id}
                  customer={customer}
                  handleEliminar={handleEliminar}
                />
              ))}
  
                {/* {customers.map(customer => {
                  console.log(customer)
                })} */}
  
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box>
          <Typography component={'p'} variant='p' sx={{marginTop: '30px'}}>There are no customer</Typography>
        </Box>
      )}
    </Container>
  )
}

export default HomeCustomer