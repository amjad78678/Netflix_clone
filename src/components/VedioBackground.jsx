import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants'
import Shimmer from './Shimmer'

const VedioBackground = ({ movieId }) => {

    const [trailer, setTrailer] = useState(null)

    async function getMovieTrailer() {

        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS)

        const json = await data.json()

        console.log(json.results.filter((vid) => vid.type == 'Trailer'))

        const filterData = json.results.filter((vid) => vid.type == 'Trailer')

        setTrailer(filterData[0])

    }

    useEffect(() => {

        getMovieTrailer()

    }, [])


    return trailer==null?(<Shimmer/>):(
        <div className='w-screen '>
            <iframe className='w-screen aspect-video' src={`https://www.youtube.com/embed/${trailer.key}?si=AMnPmyAOsxk6oPNq?&autoplay=1&mute=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}

export default VedioBackground