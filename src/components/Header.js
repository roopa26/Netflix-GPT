import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../utils/fireBaseConfig';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { LOGO, USER_AVATAR } from '../utils/constants';

const Header = () => {
  const isLoggedIn = useSelector((store) => store.userReducer);
  const navigate = useNavigate();
  const [showPopUp, setShowPopUp] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              //SignIn
           const {uid, email, accessToken, displayName, photoURL} = user;
          dispatch(addUser({uid, email, accessToken, displayName, photoURL}))
          navigate("/browse")
          } else {
              //SIgnOut
            dispatch(removeUser())
            navigate("/")
          }
        });

        return () => unsubscribe();
  }, [])

  const handleAvatar = () => {
    setShowPopUp(!showPopUp);
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='absolute header h-fit bg-gradient-to-b from-black z-10 w-[98%] py-4 px-12 mx-12 flex justify-between items-center'>
        <img className= 'w-44  object-contain'
            src = {LOGO}
            alt = "Logo"
        />
        { isLoggedIn &&
          (<div className='avatarImg w-32 mr-12 text-white' onClick={handleAvatar}>
            <div className='flex items-center'>
              <img className='object-contain w-12'
              src = {USER_AVATAR}
              //src = {isLoggedIn.photoURL}
              alt = "Avatar"
              />
              <h4 className='ml-2 font-bold'>{isLoggedIn.displayName}</h4>
            </div>
          <ul className={`w-auto h-auto bg-black mt-4 p-2 rounded-md right-35 leading-7 absolute ${showPopUp ? "" : "hide"}`}>
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <hr/>
              <li onClick={handleSignOut}><a href="#">Sign Out</a></li>
            </ul>
        </div>)
        }
    </div>
  )
}

export default Header