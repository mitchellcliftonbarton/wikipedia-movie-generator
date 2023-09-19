import wtf from 'wtf_wikipedia'

export default async function getMovieData(movieSlug) {
  let doc = await wtf.fetch(movieSlug)
  let plot = doc.section('Plot').json()

  return {
    title: doc.title(),
    plot: plot
  }
}