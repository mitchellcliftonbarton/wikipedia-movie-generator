import './../css/global.css'
import movies from '../data/movies'
import getMovieData from './lib/getMovieData'
import flattenSentences from './lib/flattenSentences'
import Player from './classes/player'

document.addEventListener('DOMContentLoaded', async () => {
  /*
  -----------
  VARS
  -----------
  */
  
  const randomMovie = movies[Math.floor(Math.random() * movies.length)]
  const textSection = document.getElementById('text-section')
  const textContent = document.getElementById('text-content')
  const movieTitle = document.getElementById('movie-title')


  /*
  -----------
  GET MOVIE DATA
  -----------
  */
  
  const movieData = await getMovieData(randomMovie)
  
  /*
  -----------
  RENDER
  -----------
  */
  
  // add h1 with movie title
  movieTitle.innerHTML = movieData.title

  // create new array with all the sentences
  const sentences = flattenSentences(movieData.plot.paragraphs)

  console.log(sentences)

  // create new player instance
  const player = new Player({
    el: textContent,
    sentences
  })
})