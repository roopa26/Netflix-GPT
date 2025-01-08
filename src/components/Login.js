import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);

  const onToggleHandler = () => {
    setIsSignIn(!isSignIn);
  }

  return (
    <div className='loginBody h-[100vh] w-[100vw] bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg")]'>
        <Header/>
        {/* <div className='w-full h-full bg-repeat-y bg-center bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg")]'> */}
            {/* <img
            src = "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="Bg Image"
            />
        </div> */}
        <div className='formContainer bg-black w-[450px] flex flex-col justify-center mb-36 mx-auto left-0 right-0 mt-8 bg-opacity-80'>
           <form className='form text-white flex flex-col py-12 px-16'>
            <h1 className='font-bold mb-12 text-4xl text-left'>{isSignIn? "Sign In":"Sign Up"}</h1>
            {isSignIn &&  <input className='m-1 h-16 p-4 mb-5 border-2 border-gray-200 bg-black rounded-md' type='text' placeholder='Full Name'/>}
            <input className='m-1 h-16 p-4 mb-5 border-2 border-gray-200 bg-black rounded-md' type='text' placeholder='Email Address'/>
            <input className='m-1 h-16 p-4 mb-5 border-2 border-gray-200 bg-black' type='password' placeholder='Password'/>
            <button className='bg-red-600 p-2 m-1 h-12 mb-8 rounded-md text-base font-medium'>
                {isSignIn? "Sign In":"Sign Up"}
            </button>
            <p className='font-semibold cursor-pointer' onClick={onToggleHandler}>
                {isSignIn? "New to Netflix? Sign Up now":"Already registered? Sign In now"}
            </p>
           </form>
        </div>
        {/* </div> */}
    </div>
  )  
}

export default Login