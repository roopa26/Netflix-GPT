import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../utils/fireBaseConfig';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Body = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                //SignIn
             const {uid, email, accessToken, displayName, photoURL} = user;
            dispatch(addUser({uid, email, accessToken, displayName, photoURL}))
            } else {
                //SIgnOut
              dispatch(removeUser())
            }
          });
    }, [])

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
    ])
  return (
    
    <div className='h-full'>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
    
  )
}

export default Body