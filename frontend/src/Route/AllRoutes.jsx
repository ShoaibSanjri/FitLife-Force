import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../page/Login'
import Register from '../page/Register'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={'*'}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes