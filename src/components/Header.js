import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../utils/fireBaseConfig';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { LanguageOptions, LOGO, USER_AVATAR } from '../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { addShowGpt } from '../utils/gptSearchSlice';
import { updateLanguageSelected, uploadLanguageFile } from '../utils/appConfigSlice';

const Header = () => {
  const isLoggedIn = useSelector((store) => store.userReducer);
  const showGptSearch = useSelector(store => store.gptSearch.showGptSearch)
  const navigate = useNavigate();
  const [showPopUp, setShowPopUp] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              //SignIn
           const {uid, email, accessToken, displayName, photoURL} = user;
          dispatch(addUser({uid, email, accessToken, displayName, photoURL}))
          localStorage.setItem("isLoggedIn", true)
          //navigate("/browse")
          } else {
              //SIgnOut
            dispatch(removeUser())
            localStorage.setItem("isLoggedIn", false)
            navigate("/")
          }
        });

        getLanguageFile("en");

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

  const handleSearchClick = async () => {
    dispatch(addShowGpt());
    navigate('/browse')
    }

  const handleLanguageChange =async (e) => {
    dispatch(updateLanguageSelected(e.target.value)); 
    getLanguageFile(e.target.value);
  }

  const getLanguageFile = async (language) => {
    try {
      const result = await fetch(`/utils/LanguageJson/language_${language}.json`);
      
      const languageData = await result.json();
      dispatch(uploadLanguageFile(languageData))
     
    } catch (error) {
      console.error('Failed to load language file:', error);
    }
  }

  return (
    <div className='absolute header h-fit bg-gradient-to-b from-black z-10 w-[98%] py-4 px-12 mx-12 flex justify-between items-center'>
        <img onClick={() => navigate("/browse")} className= 'w-44  object-contain'
            src = {LOGO}
            alt = "Logo"
        />
        <div className='flex text-white'>
          <select onChange={handleLanguageChange} className='bg-black text-white mr-2 p-2 rounded-lg'>
            {LanguageOptions.map((lang) => (<option key={lang.value} value={lang.value}>{lang.name}</option>))}
          </select>
            { isLoggedIn &&
              (<>
                <button title="search for movies" onClick={handleSearchClick} className='bg-violet-500 w-auto p-2 mr-4 rounded-lg'>
                  {showGptSearch ? "Home Page" : <FontAwesomeIcon className='h-7' icon={faMagnifyingGlass} /> }
                </button>
                <div className='avatarImg w-32 mr-12 text-white' onClick={handleAvatar}>
                  <div className='flex items-center'>
                    <img className='object-contain w-12'
                    src = {USER_AVATAR}
                    //src = {isLoggedIn.photoURL}
                    alt = "Avatar"
                    />
                    <h4 className='ml-2 font-bold w-14'>{isLoggedIn.displayName}</h4>
                  </div>
                <ul className={`w-auto h-auto bg-black mt-4 p-2 rounded-md right-35 leading-7 absolute ${showPopUp ? "" : "hide"}`}>
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <hr/>
                    <li onClick={handleSignOut}><a href="#">Sign Out</a></li>
                  </ul>
                </div>
              </>
              )
            }
        </div>
    </div>
  )
}

export default Header