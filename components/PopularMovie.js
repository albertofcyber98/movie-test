import { useState } from 'react'
import MovieCard from './MovieCard'

const PopularMovie = ({ movies, onSendData, isLoading }) => {
  const [load, setLoad] = useState(1)
  const [selectedOption, setSelectedOption] = useState('')
  const handleSelectChange = event => {
    setSelectedOption(event.target.value)
    if (event.target.value == 'Ascending') {
      movies.sort((a, b) => a.title.localeCompare(b.title))
    } else {
      movies.sort((a, b) => b.title.localeCompare(a.title))
    }
  }
  const sendDataToParent = () => {
    let page = load + 1
    onSendData(page)
    setLoad(page)
  }
  return (
    <div className="bg-[#161A26] container pt-5 max-w-7xl mx-auto pb-10 px-4">
      <h1 className="text-white text-2xl mt-8 mb-5">What's Popular</h1>
      <div className="mb-6">
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
      <div className="text-center mt-6">
        <button
          type=""
          className="bg-[#03FB35] hover:bg-[#82f198] text-black font-medium py-2 px-6 rounded "
          onClick={sendDataToParent}
          disabled={isLoading}
        >
          Load More
        </button>
      </div>
    </div>
  )
}

export default PopularMovie
