import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/fireBaseConfig';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const isLoggedIn = useSelector((store) => store.userReducer);
  const navigate = useNavigate();
  const [showPopUp, setShowPopUp] = useState(false);

  const handleAvatar = () => {
    setShowPopUp(!showPopUp);
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='header h-fit bg-gradient-to-b from-black z-10 w-auto py-4 px-12 mx-14 flex justify-between items-center'>
        <img className= 'w-44  object-contain'
            src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt = "Logo"
        />
        { isLoggedIn &&
          (<div className='avatarImg w-auto mr-12 text-white' onClick={handleAvatar}>
            <div className='flex items-center'>
              <img className='object-contain w-16'
              //src = "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
              src = {isLoggedIn.photoURL}
              alt = "Avatar"
              />
              <h4 className='ml-2 font-bold'>{isLoggedIn.displayName}</h4>
            </div>
          <ul className={`w-auto h-auto bg-black mt-4 p-2 rounded-md right-35 leading-7 absolute ${showPopUp ? "" : "hide"}`}>
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <hr/>
              <li onClick={handleSignOut}><a class="dropdown-item" href="#">Sign Out</a></li>
            </ul>
        </div>)
        }
    </div>
  )
}

export default Header