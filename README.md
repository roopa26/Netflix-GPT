# Netfix GPT
- create react app
- configured tailwind
- Header With logo
- Login Form
- Sign Up form
- Routing
- Form Validation
- SignIn and SignUp using Firebase authentication
- navigate to browse page on SignIn
- Fetch movies from TMDB
- bugfix: signup user name photo url updated immediately
- bugfix: if user not logged in rediret /browse to /login and vice versa
- unsubscribe onAuthStateStateChange event 
- Added hardcoded value to constant file
- Register to TMDB database register our app and get accessToekn and make a call to the API
- redux store to store nowplaying movie and movie trailer nad random number to get a random trialer clip
- embeded youtube clip on to the trailer part and make it autoplay and mute
- tailwind css to make it trailer container awesome
- added secondary container
- secondary container has movie list like popular top rated etc section with n number of movies
- add css to make movie card nice


# Features
- Browse (after authentication)
    - Header
    - Main Movie
        - Trailer in background
        - Title and Description
    -Movie Suggestion
        - Movie list * n
- Home page
- Sign In page
- redirect to browsw page after sign in

- Netflix GPT
    - search Bar
    - Movie Suggestions

- Browse
    1. get all movies and pass data to containers and render it
    2. fetch data in browse component then store in application level like user context or redux and use them in containers
    - Main container
        - movie tariler
        - title and play button
    - Secondary Container
        - movie list * n
            - movies * n
                - movie card



