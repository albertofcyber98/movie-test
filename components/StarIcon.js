import React, { useState } from 'react'

const StarIcon = (id) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(prevClicked => !prevClicked)
  }

  return (
    <svg
      onClick={handleClick}
      className={`cursor-pointer ${
        clicked ? 'text-yellow-400' : 'text-gray-200'
      }`}
      fill="currentColor"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '20px' }}
    >
      <polygon points="100,10 40,180 190,60 10,60 160,180" />
    </svg>
  )
}

export default StarIcon
