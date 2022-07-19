import { useState,  useEffect } from 'react'
import { atom, useAtom} from 'jotai'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Box, Container, Typography } from '@mui/material'

const customerAtom = atom({})

const ViewCustomer = () => {

  const { id } = useParams()

  const [ customer, setCustomer ] = useAtom(customerAtom)

  useEffect(() => {
    const getCustomerAPI = async () => {
      const url = import.meta.env.VITE_API_JSON_SERVER +'/'+ id
      const { data } = await axios(url)
 
      setCustomer(data);
    }

    getCustomerAPI()
  }, [])

  return (
    <Container>
      <Typography component={'h2'} variant='h3' align='left' sx={{marginTop: 10, color: '#1b3380', fontWeight: 500}}>View Customer: {customer.name}</Typography>
      <Typography component={'p'} variant='p'>Customer information</Typography>

      <Box sx={{marginTop: 5}}>
        <Typography component={'p'} variant='h4' sx={{fontWeight: 500}}>
          CUSTOMER: <Typography component={'span'} variant='span' sx={{fontWeight: 100}}>{customer.name}</Typography>
        </Typography>
        <Typography component={'p'} variant='h5' sx={{fontWeight: 500}}>
          EMAIL: <Typography component={'span'} variant='span' sx={{fontWeight: 100}}>{customer.email}</Typography>
        </Typography>
        <Typography component={'p'} variant='h5' sx={{fontWeight: 500}}>
          TELEPHONE: <Typography component={'span'} variant='span' sx={{fontWeight: 100}}>{customer.telephone}</Typography>
        </Typography>
        <Typography component={'p'} variant='h5' sx={{fontWeight: 500}}>
          BUSINESS: <Typography component={'span'} variant='span' sx={{fontWeight: 100}}>{customer.business}</Typography>
        </Typography>
        {customer.note && (
          <Typography component={'p'} variant='h5' sx={{fontWeight: 500}}>
            NOTE: <Typography component={'span'} variant='span' sx={{fontWeight: 100}}>{customer.note}</Typography>
          </Typography>
        )}
      </Box>
    </Container>
  )
}

export default ViewCustomer
