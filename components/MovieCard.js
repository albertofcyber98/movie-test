import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'

const MovieCard = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.id}`} passHref>
      <div className="bg-white shadow-sm rounded-md cursor-pointer">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={700}
          height={800}
          className="rounded-t-md"
          alt={movie.title}
        />
        <div className="px-4 py-2">
          <div className="font-bold text-xl font-[#161A26]">
            {movie.title}{' '}
            <span className="text-gray-500 font-normal text-sm">
              ({moment(movie.release_date).format('Y')})
            </span>
          </div>
          <div className="text-sm text-gray-500">
            Ratings :{' '}
            <span className="text-gray-800 font-bold">
              {movie.vote_average}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
