import axios from 'axios'
import PopularMovie from '../components/PopularMovie'
import { server } from '../config'

export default function Home({ movies }) {
  return (
    <div className="bg-[#161A26]">
      <PopularMovie movies={movies.results} />
    </div>
  )
}

export async function getStaticProps() {
  const res = await axios(
    `${server}/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`
  )
  const movies = res.data
  console.log("object", movies)
  return {
    props: { movies },
  }
}
