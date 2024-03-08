import { createContext, useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Browse from './components/Browse'
import Login from './components/Login'
import Header from './components/Header'

export const UserContext = createContext(null)


function App() {


  const appRouter=createBrowserRouter([

    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/browse',
      element:<Browse/>
    }
  ])


  const [user,setUser]=useState(null)

  useEffect(() => {
    // Load the user from local storage when the component mounts
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
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
