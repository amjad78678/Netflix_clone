import { createContext, useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import Browse from './components/Browse'
import Login from './components/Login'
import Header from './components/Header'
import Signup from './components/Signup'
import { auth } from './utils/firebase';

export const UserContext = createContext(null)


function App() {


  const appRouter=createBrowserRouter([

    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/browse',
      element:<Browse/>
    }
  ])


  const [user,setUser]=useState(null)

  useEffect(() => {
 
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;

      console.log('iamuserstate',user)
      setUser(user.displayName)   
        // ...
      } else {
        // User is signed out
        // ...
      }
    });

  }, []);

  
  return (

   <>
   <UserContext.Provider value={{user,setUser}} >
   <RouterProvider router={appRouter}/>
   </UserContext.Provider>
   </>
  )
}

export default App
