import { createContext, useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import Browse from './components/Browse'
import Login from './components/Login'
import Header from './components/Header'
import Signup from './components/Signup'
import { auth } from './utils/firebase';
import { Provider, useDispatch } from 'react-redux';
import appStore from './store/appStore';
import { addUser, removeUser } from './store/userSlice';

export const UserContext = createContext(null)



function App() {

  const dispatch = useDispatch()

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
 
        const {uid,email,displayName}=user;

        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
       console.log('iamuserstate',user)
       setUser(user.displayName)   
      
        // ...
      } else {
        // User is signed out
        
        dispatch(removeUser())
       
      }
    });

  }, []);

  
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
     
        <RouterProvider router={appRouter}/>
   
      </UserContext.Provider>
    </div>
  )
}

export default App
