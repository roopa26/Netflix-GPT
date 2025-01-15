import React from 'react'
import { IMAGE_CDN_URL } from '../../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='h-[270px] w-[180px] rounded-lg'>
        <img className='w-full h-full rounded-lg object-contain' src={IMAGE_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard