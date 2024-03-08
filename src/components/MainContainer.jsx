import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants'
import Shimmer from './Shimmer'
import VedioTitle from './VedioTitle'
import VedioBackground from './VedioBackground'

const MainContainer = () => {

    const [movies, setMovies] = useState(null)


    async function getMoviesData() {


        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS)

        const json = await data.json()

        console.log(json.results)
         
        setMovies(json.results)


    }

    useEffect(() => {

        getMoviesData()

    }, [])
    

   return movies==null?(<Shimmer/>):(

    <div>

     <VedioTitle title={movies[1]?.original_title} overview={movies[0]?.overview} />
     <VedioBackground movieId={movies[1]?.id}/>

    </div>
  )
}

export default MainContainer