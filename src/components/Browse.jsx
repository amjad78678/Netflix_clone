import React, { createContext, useContext, useState } from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import Details from './Details'




export const MovieIdContext = createContext(null)

const Browse = () => {

  const [movieId, setMovieId] = useState(null)
  const [isModal, setIsModal] = useState(false)

  return (

    <div className='bg-black'>
      <MovieIdContext.Provider value={{ movieId, setMovieId,isModal,setIsModal }} >
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      <Details/>
      </MovieIdContext.Provider>
    </div>

  )
}

export default Browse