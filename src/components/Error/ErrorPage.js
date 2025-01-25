import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
const error = useRouteError();
console.log(error)

  return (
    <div className='flex justify-center items-center w-screen h-screen'>
        <div className='rounded-lg text-black text-3xl font-bold text-center p-32 flex items-center shadow-slate-200 justify-center w-[30%] h-1/4 bg-gray-200'>
            <div className='text-8xl p-4 border-2 rounded-full bg-blue-500 w-60 h-40 mr-10'><span className='mt-8'>☹️</span></div>
            <div className='text-blue-800'>
               <div className='text-8xl font-bold'>{error.status}</div>
               <div>{error.statusText}</div>
               <div className='line-clamp-2'>{error.message}</div>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage