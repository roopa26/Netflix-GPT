import React from 'react'
import { IMAGE_CDN_URL } from '../../utils/constants'

const MovieCard = ({posterPath, isSearchPage=false, isDetailPage=false}) => {

  const getImagePlaceHolder = () => {
    const image = '/images/placeholder.png';
    return image;
  }

  return (
    <div className={`${isSearchPage ? 'w-[7.4rem] rounded-none': isDetailPage ? 'w-[20rem]': 'w-48 rounded-lg ' } mr-3 overflow-hidden ${isDetailPage? '' : 'hover:border-gray-600 hover:border-2 '}`}>
      {posterPath== null ?  (<img className='w-full h-36 rounded-lg object-fill hover:scale-125 hover:ease-out duration-500 hover:brightness-75' src={getImagePlaceHolder()}/>):
       (<img alt="movie Image" className={`${isSearchPage ? 'rounded-none': 'rounded-lg'} w-full h-full rounded-lg object-contain ${isDetailPage? '': 'hover:scale-125 hover:ease-out duration-500 hover:brightness-75'}`} src={IMAGE_CDN_URL + posterPath}/>)}
    </div>
  )
}

export default MovieCard