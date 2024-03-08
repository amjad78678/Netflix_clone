import React, { useEffect, useState } from 'react'
import MovieList from './MovieList'
import axios from 'axios'
import { API_OPTIONS } from '../utils/constants'
import Shimmer from './Shimmer'



const SecondaryContainer = () => {

  const [movies,setMovies]=useState(null)
  const [popular,setPopular]=useState(null)
  const [topRated,setTopRated]=useState(null)
  const [upcoming,setUpcoming]=useState(null)


  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2', API_OPTIONS).then((response) => {

      console.log('iam axios',response.data.results)
      setMovies(response.data.results)
    })
    axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS).then((response) => {

      console.log('iam axios',response.data.results)
      setPopular(response.data.results)
    })
    axios.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS).then((response) => {

      console.log('iam axios',response.data.results)
      setTopRated(response.data.results)
    })
    axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS).then((response) => {

      console.log('iam axios',response.data.results)
      setUpcoming(response.data.results)
    })

  
  },[])

  return movies==null?(<Shimmer/>):(
    <div className='-mt-40 relative z-10'>
      <MovieList title={'Now Playing'} movies={movies}/>
      <MovieList title={'Popular Movies'} movies={popular}/>
      <MovieList title={'Top Rated'} movies={topRated}/>
      <MovieList title={'Upcoming Movies'} movies={upcoming}/>

    </div>
  )
}

export default SecondaryContainer