const addMovieBtn = document.getElementById('add-movie-btn')
const searchBtn = document.getElementById('search-btn')

const movies = []

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list')

    if (movies.length === 0) {
        movieList.classList.remove('visible')
        return
    } else {
        movieList.classList.add('visible')
    }

    movieList.innerHTML = ''

    const filteredMovies = !filter 
        ? movies 
        : movies.filter(movie => movie.info.title.includes(filter))

    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li')
        const {info, ...otherProps} = movie
        // console.log(otherProps); // id information
        // const {title: movieTitle} = info
        // let text = movieTitle + ' - '
        // let text = movie.getFormattedTitle() + ' - '
        let { getFormattedTitle } = movie
        getFormattedTitle = getFormattedTitle.bind(movie)
        let text = getFormattedTitle() + ' - '
        for (const key in info) {
            if (key !== 'title') {
                text = text + `${key}: ${info[key]}`
            }
        }
        movieEl.textContent = text
        movieList.append(movieEl)
    })
}

const addMovieHandler = () => {
    const title = document.getElementById('title').value
    const extraName = document.getElementById('extra-name').value
    const extraValue = document.getElementById('extra-value').value

    if (
        title.trim() === '' ||
        extraName.trim() === '' ||
        extraValue.trim() === ''
    ) {
        return
    }

    const newMovie = {
        info: {
            title,
            [extraName]: extraValue,
        },
        id: Math.random().toString(),
        getFormattedTitle() {
            console.log(this);
            return this.info.title.toUpperCase()
        }
    }

    movies.push(newMovie)
    console.log(newMovie);
    renderMovies()
}

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value
    renderMovies(filterTerm)
}

addMovieBtn.addEventListener('click', addMovieHandler)
searchBtn.addEventListener('click', searchMovieHandler)