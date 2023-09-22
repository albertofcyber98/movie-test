import axios from 'axios'
import PopularMovie from '../components/PopularMovie'
import { server } from '../config'
import { useEffect, useState } from 'react'

export default function Home({ movies }) {
  const [childData, setChildData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setChildData(movies)
  }, [])

  const handleChildData = async data => {
    setIsLoading(true)

    try {
      const res = await axios(
        `${server}/upcoming?api_key=cb1f3208a6f0463847684cd273487aa8&language=en-US&page=${data}`
      )
      setChildData(prevData => [...prevData, ...res.data.results])
    } catch (error) {
      console.error('Error fetching additional data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-[#161A26]">
      <PopularMovie
        movies={childData}
        onSendData={handleChildData}
        isLoading={isLoading}
      />
    </div>
  )
}

export async function getStaticProps() {
  const res = await axios(
    `${server}/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`
  )
  const movies = res.data.results
  return {
    props: { movies },
  }
}
