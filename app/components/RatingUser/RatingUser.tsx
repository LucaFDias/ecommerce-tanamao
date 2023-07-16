import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa"

const RatingUser = () => {
  return (
    <div className='flex text-yellow-500'>
      <FaStar />
      <FaStar />
      <FaStarHalfAlt />
      <FaRegStar />
      <FaRegStar />
    </div>
  )
}

export default RatingUser