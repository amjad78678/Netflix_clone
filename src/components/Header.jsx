import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';


const Header = (props) => {

  const {name}=props

  console.log('name',name)

  const user = auth.currentUser;
  const navigate=useNavigate()

  const handleSignOut=()=>{


    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')   
      
    }).catch((error) => {
      // An error happened.
    });
  }

  return (

    <div className='absolute w-full bg-gradient-to-b from-black z-10 flex justify-between'>   
      <img className='top-0 left-0 mx-10 my-2' src="https://imgs.search.brave.com/wgBHIIfgssVBtfwYC227BBTnm530qhqvzVGm1YSiFgg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmZseGV4dC5j/b20vZmZlL3NpdGV1/aS9hY3F1aXNpdGlv/bi9ob21lL25mbHhs/b2dvLnBuZw" alt="netflixLogo" />
      
       <div className='flex m-5 '>
        <p className='text-white'>{user.name}</p>
        <img className='h-10 rounded-md ' src="https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABe3AS8xWNNmm8HlokLrmgIPqxgDohbraAUmm3dQrgmRf7U13AMm-4aXXkLFYD4lyDg6bNvqt_2Lc8cdtEM9Y2n3TDYTrXqQ.png?r=b39" alt="" />
        <h1 onClick={handleSignOut} className='text-white mt-2 ms-2 cursor-pointer'>Sign Out</h1>
      </div>
      
    </div>
  )
} 

export default Header