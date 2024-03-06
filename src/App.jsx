import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Browse from './components/Browse'
import Login from './components/Login'
import Header from './components/Header'

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

  
  return (
   <>
   <RouterProvider router={appRouter}/>
   </>
  )
}

export default App
