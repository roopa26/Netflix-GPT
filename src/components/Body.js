import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchComponent from './SearchPage/SearchComponent';

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        },
        {
            path: "/search",
            element: <SearchComponent/>
        }
    ])
  return (
    
    <div className='h-screen bg-black'>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
    
  )
}

export default Body