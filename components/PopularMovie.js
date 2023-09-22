import { useState } from 'react'
import MovieCard from './MovieCard'

const PopularMovie = ({ movies }) => {
  const [selectedOption, setSelectedOption] = useState('')
  const handleSelectChange = event => {
    setSelectedOption(event.target.value)
    if (event.target.value == 'Ascending') {
      movies.sort((a, b) => a.title.localeCompare(b.title))
    } else {
      movies.sort((a, b) => b.title.localeCompare(a.title))
    }
  }
  return (
    <div className="bg-[#161A26] container pt-5 max-w-7xl mx-auto pb-10 px-4">
      <h1 className="text-white text-2xl mt-8 mb-5">What's Popular</h1>
      <div className="mb-4">
        <select
          className="border border-gray-300 rounded p-2"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option value="">Select an option</option>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {movies.map(movie => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  )
}

export default PopularMovie
