import React from 'react'
import { Button, TableCell, TableRow, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const CustomerRow = ({customer, handleEliminar}) => {

  const navigate = useNavigate()

  const { id, name, business, email, telephone, note } = customer

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>
        <Typography component={'p'} variant='p'>
          <Typography component={'span'} variant='subtitle2'>EMAIL: </Typography>{email}
        </Typography>
        <Typography component={'p'} variant='p'>
          <Typography component={'span'} variant='subtitle2'>TELEPHONE: </Typography>{telephone}
        </Typography>
      </TableCell>
      <TableCell>{business}</TableCell>
      <TableCell sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Button variant='contained' color='success' sx={{marginTop: '2px', marginBottom: '2px'}} onClick={() => navigate(`view/${id}`)}>View</Button>
        <Button variant='contained' sx={{marginTop: '2px', marginBottom: '2px'}} onClick={() => navigate(`edit/${id}`)}>Edit</Button>
        <Button variant='contained' color='error' sx={{marginTop: '2px', marginBottom: '2px'}} onClick={() => handleEliminar(id)}>Remove</Button>
      </TableCell>
    </TableRow>
  )
}

export default CustomerRow