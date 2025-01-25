import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import React from 'react'

const VideoTitle = ({title,overview}) => {

  return (
    <div className='text-white bg-opacity-25 pt-20 px-8 absolute text-justify font-sans'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='pt-4 font-medium text-base line-clamp-5'>{overview}</p>
        <div className='flex mt-4 text-black font-medium'>
            <button className='bg-white p-3 px-8 text-sm mr-2 text-center rounded-xl'><FontAwesomeIcon icon={faPlay} />  Play</button>
            <button className='bg-white p-3 text-sm text-center rounded-xl'><FontAwesomeIcon icon={faCircleQuestion} />  More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle