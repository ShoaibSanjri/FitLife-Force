import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../page/Login'
import Register from '../page/Register'
import Home from '../page/Home'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes