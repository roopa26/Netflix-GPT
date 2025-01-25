import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Error/ErrorPage';
import { lazy, Suspense } from 'react';

const Body = () => {

    const MovieDetailsComponent = lazy(() => import('./MovieDetailsPage/MovieDetailsComponent'))

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element:<Login/>,
            errorElement: <ErrorPage/>
        },
        {
            path: "/browse",
            element: <Browse/>
        },
        {
            path : "/movie/:id/:moviename",
            element: <Suspense fallback="loading..."><MovieDetailsComponent/></Suspense> 
        }
    ])
  return (
    
    <div className='h-screen bg-black'>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
    
  )
}

export default Body