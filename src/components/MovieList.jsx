import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    
    <div className='mx-12 text-gray-300 '>
          <h1 className='text-3xl font-semibold py-4'>{title}</h1>
          <div className='flex overflow-x-scroll'>
         {movies.map((movie)=>

            <MovieCard key={movie.id} image={movie.backdrop_path}/>

          )}
          </div>
    </div>
    
  )
}

export default MovieList