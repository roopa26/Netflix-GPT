import React from 'react'
import { IMAGE_CDN_URL } from '../../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='h-[270px] w-[180px] rounded-lg overflow-hidden'>
        <img className='w-full h-full rounded-lg object-contain hover:scale-125 hover:ease-out duration-500 hover:brightness-75' src={IMAGE_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard