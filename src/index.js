import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Login from './components/Login';
import Browse from './components/Browse';
//import reportWebVitals from './reportWebVitals';

// const appRouter = createBrowserRouter([{
//   path: "/",
//   element: <Body/> 
// },
// {
//   path: "/Login",
//   element: <Login/>
// },
// {
//   path: "/browse",
//   element: <Browse/>
// }])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={appRouter}> */}
      <App />
    {/* </RouterProvider>  */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
