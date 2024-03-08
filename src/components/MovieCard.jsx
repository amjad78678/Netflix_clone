import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({image}) => {
  return (  
      <div className='flex-shrink-0 mr-2 h-52 w-80'>
        <img className='object-cover h-full w-full rounded-lg' src={IMG_CDN_URL+image} alt="card_image" />
    </div>
  )
}

export default MovieCard