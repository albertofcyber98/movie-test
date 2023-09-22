import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'
import StarIcon from './StarIcon'

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-sm rounded-md">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        width={700}
        height={800}
        className="rounded-t-md"
        alt={movie.title}
      />
      <div className="flex justify-between items-center">
        <div className="px-4 py-2">
          <Link href={`/movie/${movie.id}`} passHref>
            <div className="font-bold text-[17px] font-[#161A26] cursor-pointer hover:text-[#03FB35]">
              {movie.title}{' '}
            </div>
          </Link>
          <div className="text-gray-500 font-normal text-sm">
            {moment(movie.release_date).format('DD MMMM YY')}
          </div>
        </div>
        <div className="pr-3">
          <span>{movie.vote_average}</span>
          <StarIcon />
        </div>
      </div>
    </div>
  )
}

export default MovieCard
