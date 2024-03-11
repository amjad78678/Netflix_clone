import React, { useContext, useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { auth } from '../utils/firebase';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import { toast } from 'react-toastify';


const Login = () => {

  const {user,setUser}=useContext(UserContext)
  const [isSignIn, setIsSignIn] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const [name,setName]=useState(null)

  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const nameRef = useRef(null)



 const navigate=useNavigate()



  const handleButtonClick = () => {


    //need validate form data

   
  
      const message = checkValidData(emailRef.current.value, passwordRef.current.value)
      toast.error(message)

    

    if (message === null) {

        //Signin Logic

        if(emailRef.current.value.trim()!==''){

          signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => {
                  // Signed in 
                  const user = userCredential.user;
                  console.log('loginedUser',user)    
                  //now logged in now need to go to browse url
                  navigate('/browse')
                  
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  toast.error(errorMessage)
                });
        }


      

    }


  }

  return (

    <div className='h-screen'>  
      <Header name={name}/>
      <div className='absolute '>


        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg" />

      </div>

      <form onSubmit={(e) => e.preventDefault()} action="" className='bg-black absolute w-3/12  mt-64  mx-auto right-0 left-0 text-white opacity-80 rounded-md'>

        <div className='ms-24 mt-16'>
          <h1 className='text-white font-semibold text-4xl mb-6 '>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
          {!isSignIn &&
           <input ref={nameRef} type="text" placeholder='Full Name' className='p-2 mb-5  w-9/12 bg-gray-600 rounded-sm' />
          }
          <input type="text" ref={emailRef} placeholder='Email Address' className='p-2 mb-5  w-9/12 bg-gray-600 rounded-sm' />
          <input type="password" ref={passwordRef} placeholder='Password' className='p-2 w-9/12 bg-gray-600 rounded-sm' />


          <button onClick={handleButtonClick} className='p-4 mt-6 bg-red-700 w-9/12 rounded-lg font-semibold'>{isSignIn ? 'Sign In' : 'Sign Up'}</button>


          <p className='py-12'><span className='text-gray-500'>New to Netflix?</span><span className='cursor-pointer'><Link to={'/signup'}>Sign Up Now</Link></span> </p>
        </div>

      </form>

    </div>
  )
}

export default Login