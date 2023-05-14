import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../contextApi/Context';


const Login = () => {
    
const initState = {email: "",password: ""};
  
    const {handleLogin} = useContext(AppContext)

    const [userDetails,setUserDetails]=useState(initState)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });

      };

      const handleSubmit=(e)=>{
      e.preventDefault()
        if(userDetails.email==='' || userDetails.password===''){
            alert('Field Should Not Be Empty')
            return;
        }
        fetch("https://gentle-polo-shirt-ant.cyclic.app/auth/login",{
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify(userDetails)
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            // localStorage.setItem("token",res.token)
            // localStorage.setItem("name",res.name)
            handleLogin(res)
        })
        .catch(err=>console.log(err))
        setUserDetails(initState)
        
    }  

  let loginImg='https://wealthofgeeks.com/wp-content/uploads/2021/11/1242049_HealthyLifestyle_Option2_120721.jpg'
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>

        <div className='bg-gray-800 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                <h2 className='text-4xl text-teal-400 font-bold text-center'>Log In</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Email</label>
                    <input value={userDetails.email} onChange={handleChange} name='email' className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input value={userDetails.password} onChange={handleChange}  name='password' className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Forgot Password</p>
                </div>
                <button onClick={handleSubmit} className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>LOGIN</button>
                <span className='text-white'>Not Registered ?</span> <Link to={'/register'}><span className='text-blue-500'>Register</span></Link>
            </form>
        </div>
    </div>
  )
}

export default Login