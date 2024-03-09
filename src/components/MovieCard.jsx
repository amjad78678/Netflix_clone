import React, { useContext } from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import { MovieIdContext } from './Browse'

const MovieCard = ({image,id}) => {

  const {movieId,setMovieId,setIsModal}=useContext(MovieIdContext)

  const handleClick=()=>{

    setMovieId(id)
    setIsModal(true)
     
  }

  return (  
      <div onClick={handleClick} className='flex-shrink-0 mr-2 h-52 w-80'>
        <img className='object-cover h-full w-full rounded-lg' src={IMG_CDN_URL+image} alt="card_image" />
    </div>
  )
}

export default MovieCard    