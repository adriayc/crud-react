import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import HomeCustomer from './pages/HomeCustomer'
import NewCustomer from './pages/NewCustomer'
import ViewCustomer from './pages/ViewCustomer'
import EditCustomer from './pages/EditCustomer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/customer' element={<Layout />}>
          <Route index element={<HomeCustomer />} />
          <Route path="new" element={<NewCustomer />} />
          <Route path="view/:id" element={<ViewCustomer />} />
          <Route path="edit/:id" element={<EditCustomer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
