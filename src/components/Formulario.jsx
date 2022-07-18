import { useEffect, useState } from 'react'
import { atom, useAtom} from 'jotai'
import { Box, Button, FormControl, InputLabel, TextField } from '@mui/material'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const customerAtom = atom({
  name: '',
  business: '',
  email: '',
  telephone: '',
  note: ''
})

const Formulario = () => {

  const params = useParams()

  const navigate = useNavigate();

  const [customer, setCustomer] = useAtom(customerAtom)

  useEffect(() => {
    const getCustomerAPI = async () => {
      if(params.id) {
        const url = import.meta.env.VITE_API_JSON_SERVER +"/"+ params.id
        const { data } = await axios(url)

        setCustomer(data)
      }
    }
    
    getCustomerAPI()
  }, [params])


  const { name, business, email, telephone, note } = customer;

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(Object.values(customer).includes('')) {
      console.log('Los campos estan vacioes')
      return
    }


    if(customer.id) {
      const url = import.meta.env.VITE_API_JSON_SERVER +'/'+ customer.id
      await axios.put(url, customer)
    } else {
      const url = import.meta.env.VITE_API_JSON_SERVER
      await axios.post(url, customer)
    }

    navigate('/customer')
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <FormControl fullWidth sx={{marginBottom: 2}}>
        {/* <InputLabel>Name:</InputLabel> */}
        <TextField
          // required
          id='name'
          label='Name'
          type='text'
          name='name'
          value={name}
          // value={customer.name || ''}
          onChange={(e) => setCustomer({...customer, name: e.target.value})}
        />
      </FormControl>
      <FormControl fullWidth sx={{marginBottom: 2}}>
        <TextField
          // required
          id='business'
          label='Business'
          type='text'
          name='business'
          value={business}
          // value={customer.business || ''}
          onChange={(e) => setCustomer({...customer, business: e.target.value})}
        />
      </FormControl>
      <FormControl fullWidth sx={{marginBottom: 2}}>
        <TextField
          // required
          id='email'
          label='Email'
          type='email'
          name='email'
          value={email}
          onChange={(e) => setCustomer({...customer, email: e.target.value})}
        />
      </FormControl>
      <FormControl fullWidth sx={{marginBottom: 2}}>
        <TextField
          // required
          id='telephone'
          label='Telephone'
          type='tel'
          name='telephone'
          value={telephone}
          onChange={(e) => setCustomer({...customer, telephone: e.target.value})}
        />
      </FormControl>
      <FormControl fullWidth sx={{marginBottom: 2}}>
        <TextField
          // required
          id='note'
          label='Note'
          name='note'
          value={note}
          onChange={(e) => setCustomer({...customer, note: e.target.value})}
          multiline
          rows={4}
        />
      </FormControl>

      <Box sx={{
        textAlign: 'center',
        marginTop: 2
      }}>
        <Button type='submit' variant='contained'>{customer.id ? 'Update' : 'Add'} Customer</Button>
      </Box>
    </form>
  )
}

Formulario.preventDefault = {
  customer: {}
}

export default Formulario