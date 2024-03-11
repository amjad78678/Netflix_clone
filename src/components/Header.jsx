import React, { useContext, useEffect, useState } from 'react'
import { getAuth, signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { API_OPTIONS, LOGO_URL } from '../utils/constants';
import { UserContext } from '../App';


const Header = () => {

  const {user,setUser}=useContext(UserContext)

  
  const navigate=useNavigate()

  const handleSignOut=()=>{


    signOut(auth).then(() => {

      setUser(null);
      // Sign-out successful.
      navigate('/')   
      
    }).catch((error) => {
      console.log(error.message)
      // An error happened.
    });
  }



  return (

    <div className='absolute w-full bg-gradient-to-b from-black z-10 flex justify-between'>   
      <img className='top-0 left-0 mx-10 my-2' src={LOGO_URL} alt="netflixLogo" />
       <div className='flex m-5 '>
        {user ? <h1 className='text-gray-200 text-2xl mx-4 pt-1'>Hi,{user}</h1> : null}
        <img className='h-10 rounded-md ' src="https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABe3AS8xWNNmm8HlokLrmgIPqxgDohbraAUmm3dQrgmRf7U13AMm-4aXXkLFYD4lyDg6bNvqt_2Lc8cdtEM9Y2n3TDYTrXqQ.png?r=b39" alt="" />
        <h1 onClick={handleSignOut} className='text-white mt-2 ms-2 cursor-pointer'>Sign Out</h1>
      </div>

      
    </div>
  )
} 

export default Header