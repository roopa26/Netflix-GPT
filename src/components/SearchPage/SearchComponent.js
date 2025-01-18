import React, { useEffect, useRef, useState } from 'react'
import { API_OPTIONS, BG_URL } from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addSearchMovies } from '../../utils/movieSlice'
import SearchList from './SearchList'

const SearchComponent = () => {
    const searchText = useRef(null);
    const dispatch = useDispatch();
    const [showSearchList, setShowSearchList] = useState(false);
    const [imgClass, setImgClass] = useState('h-full');
    const languageSelected = useSelector(store => store.appConfig.languageFile)
    const moviesSearched = useSelector(store => store.movies.searchedMoviesList)
    const [notFound, setNotFound] = useState("");

    const handleSearchClick = async () => {
         // const chatCompletion = await openai.chat.completions.create({
            //   messages: [{ role: 'user', content: 'Say this is a test' }],
            //   model: 'gpt-3.5-turbo',
            // });
            // console.log(chatCompletion);
            const searchMovies = await fetch(`https://api.themoviedb.org/3/search/collection?query=${searchText.current.value}}&include_adult=false&language=en-US`, API_OPTIONS)
            const movieData = await searchMovies.json();

            if(movieData?.results){
              dispatch(addSearchMovies(movieData?.results))
              setShowSearchList(true)
              movieData.results.length > 5 ? setImgClass('h-auto') : setImgClass('h-full')
            }
            else{
              setNotFound("Movie not found");
            }    
    }

  return (
    <div className={`${imgClass} w-full`}
    style={{ backgroundImage: `url(${BG_URL})`}}>
        <div className='bg-black text-white mx-auto left-0 right-0 top-24 relative p-2 w-[50%]'>
            <form onClick={(e) => {e.preventDefault()}} className='h-full w-full'>
                   <input ref = {searchText} className='w-[80%] mr-4 h-10 rounded-sm p-2 text-black' 
                   placeholder={languageSelected.Placeholder.Enter_the_movie_name}/>
                   <button onClick={handleSearchClick} className='h-10 bg-red-700 rounded-lg w-32'>
                    {languageSelected.Buttons.Search}
                  </button>
            </form>
        </div>
          <div className='bg-black bg-opacity-60 mx-6 mt-28 flex justify-center items-center'>
             {showSearchList ? (<SearchList/>):<h1 className='text-white text-2xl'>{notFound}</h1>}
          </div>
        
        
    </div>
  )
}

export default SearchComponent