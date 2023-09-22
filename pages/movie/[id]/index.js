import axios from 'axios'
import Image from 'next/image'
import Meta from '../../../components/Meta'
import { server } from '../../../config'

const Movie = ({ movie }) => {
  return (
    <div className="container max-w-4xl mx-auto pt-6 bg-[#161A26]">
      <Meta title={movie.title} />
      <div className="px-3">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          width={1000}
          height={600}
          className="rounded-md"
          alt={movie.title}
        />
        <h1 className="font-bold text-white text-xl mt-5 m">{movie.title}</h1>
        <p className="font-normal text-gray-400 text-sm pt-2">
          {movie.genres.map(genre => genre.name).join(' / ')}
        </p>
        <p className="font-normal text-gray-400 text-sm">
          {movie.release_date}
        </p>
        <p className="mt-4 text-gray-200 mb-1">Overview</p>
        <p className="text-gray-300 text-sm">{movie.overview}</p>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const { id } = context.params
  const res = await axios(
    `${server}/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  )
  const movie = res.data

  return {
    props: { movie },
  }
}

export async function getStaticPaths() {
  const res = await axios(
    `${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  )
  const movies = res.data.results

  const ids = movies.map(movie => movie.id)
  const paths = ids.map(id => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default Movie
