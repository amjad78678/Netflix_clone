import React, { useContext, useEffect, useState } from 'react'

import { MovieIdContext } from './Browse.jsx'
import axios from 'axios'

   

const Details = () => {


  const { movieId, setMovieId,isModal,setIsModal } = useContext(MovieIdContext)
  const [trailerId,setTrailerId]=useState(null)
  const [movieDetails,setMovieDetails]=useState(null)

  useEffect(()=>{

    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=27ad9b7cc676817eed5b95ea2f938211`).then((response)=>{
       
      setTrailerId(response.data.results[0].key)
      
    })
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=27ad9b7cc676817eed5b95ea2f938211`).then((response)=>{
       
      setMovieDetails(response.data)
      
    })

    
  })

  return isModal&&movieDetails? (
    <div style={{ backgroundColor:'rgba(0, 0, 0 ,0.7)'}} className='fixed pt-10 top-0 bottom-0 left-0 right-0 z-20'>
       

      <div className='grid grid-cols-12'>

        <div className='col-span-2'></div>

        <div className='col-span-8 '>  

          <iframe className='w-full rounded-lg' height={600} src={`https://www.youtube.com/embed/${trailerId}?si=AXTXAPIuzb5M0IyV&autoplay=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

          <div className='bg-stone-900 w-1000 p-5 rounded-lg'>
            <div className='flex'>
              <button className='bg-white border border-black py-1 px-7 text-xl rounded-lg mr-4 flex hover:bg-opacity-80'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-black w-10 h-10 mr-2">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>

                <p className='my-1 text-black'>Play</p></button>


              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white me-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
              </svg>

              <svg onClick={()=>setIsModal(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white ms-auto cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>


             
            </div>

            <div className='px-2 py-4'>
              <h1 className='text-white font-bold text-4xl'>{movieDetails.original_title}</h1>
              <p className='text-white'>{movieDetails.overview}</p>

            </div>
          </div>
        </div>
        <div className='col-span-2'></div>

      </div>

      </div>
  ):null
}

export default Details