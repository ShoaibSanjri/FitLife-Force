import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

let initState={
    email:'',
    name:'',
    age:0,
    password:''
}

const Register = () => {
    let loginImg='https://cdn4.vectorstock.com/i/1000x1000/56/03/healthy-lifestyle-habits-vector-20785603.jpg'

    const [userDetails,setUserDetails]=useState(initState)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
      };
    
      const handleSubmit=(e)=>{
        e.preventDefault()
        fetch('https://gentle-polo-shirt-ant.cyclic.app/auth/signup' ,{
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify(userDetails)
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        setUserDetails(initState)
    }

    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
          <div className='hidden sm:block'>
              <img className='w-full h-full object-cover' src={loginImg} alt="" />
          </div>
  
          <div className='bg-gray-800 flex flex-col justify-center'>
              <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                  <h2 className='text-4xl text-teal-400 font-bold text-center'>Register With Us</h2>
                  <div className='flex flex-col text-gray-400 py-2'>
                      <label>Email</label>
                      <input value={userDetails.email} name='email' onChange={handleChange} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                  </div>
                  <div className='flex flex-col text-gray-400 py-2'>
                      <label>Name</label>
                      <input value={userDetails.name} name='name' onChange={handleChange} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                  </div>
                  <div className='flex flex-col text-gray-400 py-2'>
                      <label>Age</label>
                      <input value={userDetails.age} name='age' onChange={handleChange} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="number" />
                  </div>
                  <div className='flex flex-col text-gray-400 py-2'>
                      <label>Password</label>
                      <input value={userDetails.password} name='password' onChange={handleChange} className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                  </div>
                  <div className='flex justify-between text-gray-400 py-2'>
                      <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                      <p>Forgot Password</p>
                  </div>
                  <button onClick={handleSubmit} className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SIGNIN</button>
                  <span className='text-white'>Already Registered ?</span> <Link to={'/login'}><span className='text-blue-500'>Login</span></Link>
              </form>
          </div>
      </div>
    )
}

export default Register