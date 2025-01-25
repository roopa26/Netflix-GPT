import React, { useEffect, useRef, useState } from 'react'
import { API_OPTIONS, BG_URL, SEARCH_API } from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addSearchMovies } from '../../utils/movieSlice'
import SearchList from './SearchList'
import { addSearchResult } from '../../utils/searchSlice'

const SearchComponent = () => {
    const searchText = useRef(null);
    const timer = useRef(null);
    const dispatch = useDispatch();
    const [imgClass, setImgClass] = useState('h-full');
    const languageSelected = useSelector(store => store.appConfig.languageFile)
    const [searchSuggestionArray, setSearchSuggestionArray] = useState([]);
    const searchList = useSelector(store => store.searchList.searchResult);

    const handleSearchClick = async () => {
         // const chatCompletion = await openai.chat.completions.create({
            //   messages: [{ role: 'user', content: 'Say this is a test' }],
            //   model: 'gpt-3.5-turbo',
            // });
            // console.log(chatCompletion);
            const searchMovies = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText.current.value}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
            const movieData = await searchMovies.json();

            if(movieData?.results.length > 0){
              dispatch(addSearchMovies(movieData?.results))
              movieData.results.length > 5 ? setImgClass('h-auto') : setImgClass('h-full')
            }  
            else{
              dispatch(addSearchMovies(null))
            }
            setSearchSuggestionArray([])
    }

    const handleInputTextChange = () => {
      
      if(!searchList[searchText.current.value])
        timer.current = setTimeout(async () => {

            const searchUrl = SEARCH_API.replace('{search_string}', searchText?.current.value)
            const response = await fetch(`${searchUrl}`);
            const searchResults = await response.json();
            
            setSearchSuggestionArray(searchResults[1]);
            dispatch(addSearchResult({[searchText.current.value]:searchResults[1]}))

        },200)
      else 
      {
        setSearchSuggestionArray(searchList[searchText.current.value])
      }
    }

    useEffect(() => {
      return () => {
        clearTimeout(timer.current);
      }
    })

  return (
    <div className={`${imgClass} w-full overflow-hidden`}
    style={{ backgroundImage: `url(${BG_URL})`}}>
        <div className=' text-white mx-auto left-0 right-0 top-24 rounded-lg relative p-2 w-[50%]'>
            <form onClick={(e) => {e.preventDefault()}} className='flex p-2 w-full rounded-lg bg-black'>
                   <input ref = {searchText} onChange={handleInputTextChange} className='w-[80%] mr-4 h-10 rounded-sm p-2 text-black' 
                   placeholder={languageSelected.Placeholder.Enter_the_movie_name}/>
                   <button onClick={handleSearchClick} className='h-10 bg-red-700 rounded-lg w-32'>
                    {languageSelected.Buttons.Search}
                  </button>
            </form>
            {searchSuggestionArray.length > 0 && (
              <div className='absolute  mt-2 p-4 rounded-lg bg-white text-black w-[80%]'>
                <ul>
                  {searchSuggestionArray.map((item, index) => 
                    (<li key={index} 
                    onClick={(e) => {searchText.current.value = e.target.textContent; setSearchSuggestionArray([])} } 
                    className='border-b border-b-gray-200 leading-8 font-medium text-slate-800'>{item}</li>))}
                </ul>
              </div>
            )}
        </div>
        <div className='mx-6 mt-28 flex justify-center items-center'>
           <SearchList/>
        </div>     
    </div>
  )
}

export default SearchComponent