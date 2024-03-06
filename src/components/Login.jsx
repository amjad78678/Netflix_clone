import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSigIn,setIsSignIn]=useState(false)

  return (

    <div className='h-screen'>
     <Header/>
     <div className='absolute '>


   <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg" />
    
   </div>

   <form action="" className='bg-black absolute w-3/12  mt-64  mx-auto right-0 left-0 text-white opacity-80 rounded-md'>

   <div className='ms-24 mt-16'>
    <h1 className='text-white font-semibold text-4xl mb-6 '>{isSigIn?'Sign Up':'Sign In'}</h1>
    {!isSigIn && 
    <input type="text"  placeholder='Full Name'  className='p-2 mb-5  w-9/12 bg-gray-600 rounded-sm' />
    }

    <input type="text"  placeholder='Email Address'  className='p-2 mb-5  w-9/12 bg-gray-600 rounded-sm' />
    <input type="password" placeholder='Password' className='p-2 w-9/12 bg-gray-600 rounded-sm'/>

    <button className='p-4 mt-10 bg-red-700 w-9/12 rounded-lg font-semibold'>{isSigIn?'Sign Up':'Sign In'}</button>


      <p className='py-12'><span className='text-gray-500'>{isSigIn?'New to Netflix?':'Already registered?'}</span><span className='cursor-pointer' onClick={()=>setIsSignIn(!isSigIn)}>{isSigIn?'Sign Up Now':'Sign In Now'}</span> </p>
    </div>

   </form>

   </div>
  )
}

export default Login