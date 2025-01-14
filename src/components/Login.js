import React, { useRef, useState } from 'react'
import Header from './Header';
import { validateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/fireBaseConfig';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();

  const onToggleHandler = () => {
    setErrorMessage('')
    setIsSignIn(!isSignIn);
  }

  const handleSubmitClick = async () => {
    const values = [email.current.value, password.current.value];
    if(fullName.current)
      values.push(fullName.current.value)
    
    const response = validateData(...values);
    setErrorMessage(response);

    if(response)  return ;
    if (!isSignIn) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, ...values);
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: fullName.current.value,
          photoURL: USER_AVATAR
        });
        
        const { uid, email, accessToken, displayName, photoURL } = auth.currentUser;
        dispatch(addUser({ uid:uid, email:email, accessToken:accessToken, displayName:displayName, photoURL:photoURL }));
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " " + errorMessage);
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, ...values);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " " + errorMessage);
      }
    }
    
  }

  return (
    <div className='loginBody h-[100vh] w-[100vw] bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg")]'>
        <Header/>
       
        <div className='formContainer absolute top-20 bg-black w-[450px] flex flex-col justify-center mb-36 mx-auto left-0 right-0 bg-opacity-80'>
           <form onSubmit={ (e)=>{e.preventDefault()} } className='form text-white flex flex-col py-12 px-16'>
            <h1 className='font-bold mb-12 text-4xl text-left'>{isSignIn? "Sign In":"Sign Up"}</h1>
            {!isSignIn &&  (<input ref = {fullName}
             className='m-1 h-16 p-4 mb-5 border-2 border-gray-200 bg-black rounded-md' type='text' placeholder='Full Name'/>)}
            <input ref={email}
             className='m-1 h-16 p-4 mb-5 border-2 border-gray-200 bg-black rounded-md' type='text' placeholder='Email Address'/>
            <input ref = {password}
            className='m-1 h-16 p-4 mb-5 border-2 border-gray-200 bg-black' type='password' placeholder='Password'/>
            <p className='text-red-700 font-normal'>{errorMessage}</p>
            <button onClick={handleSubmitClick} className='bg-red-600 p-2 m-1 h-12 mb-8 rounded-md text-base font-medium'>
                {isSignIn? "Sign In":"Sign Up"}
            </button>
            <p className='font-semibold cursor-pointer' onClick={onToggleHandler}>
                {isSignIn? "New to Netflix? Sign Up now":"Already registered? Sign In now"}
            </p>
           </form>
        </div>
    </div>
  )  
}

export default Login