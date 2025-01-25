export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR = "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY
    }
  };

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const MOVIE_DETAILS = "https://api.themoviedb.org/3/movie/id?language=en-US";
export const MOVIE_VIDEOS = "https://api.themoviedb.org/3/movie/{movie_id}/videos";
export const NOW_PLAYING_MOVIES = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const TOP_RATED_MOVIES = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const UPCOMING_MOVIES = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const SEARCH_API = 'http://suggestqueries.google.com/complete/search?client=firefox&q={search_string}';

export const GPT_KEY = "";
export const LanguageOptions = [{name:"English", value: "en"},{name:"Hindi", value:"hi"},{name:"Kannada", value:"ka"}]

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};