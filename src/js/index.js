import './../css/global.css'
import movies from '../data/movies'
import getMovieData from './lib/getMovieData'
import type from './lib/type'

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
  // const imagesSection = document.getElementById('images-section')


  /*
  -----------
  GET MOVIE DATA
  -----------
  */
  
  const movieData = await getMovieData(randomMovie)
  console.log(movieData)
  
  /*
  -----------
  RENDER
  -----------
  */
  
  // add h1 with movie title
  movieTitle.innerHTML = movieData.title

  // type out each sentence in the plot
  // movieData.plot.paragraphs.forEach((paragraph) => {
  //   paragraph.sentences.forEach((sentence) => {
  //     type(textContent, sentence.text)
  //   })
  // })
  type(textContent, movieData.plot.paragraphs[0].sentences[0].text)
})