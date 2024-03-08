import React from 'react'

const VedioTitle = (props) => {

   const {title,overview} = props

  return (
    <div className='w-screen aspect-video bg-gradient-to-r from-black pt-72 px-12 absolute text-white'>
        <h1 className=' text-8xl font-semibold'>{title}</h1>
        <p className='py-6 w-1/3 text-xl'>{overview}</p>

        <div className='flex'>
            <button className='bg-white border border-black py-2 px-10 text-2xl rounded-lg mr-4 flex hover:bg-opacity-80'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-black w-10 h-10 mr-2">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                  </svg>
                  
                   <p className='my-1 text-black'>Play</p></button>

                 <button className='bg-gray-500 text-white border border-black py-2 px-6 text-2xl rounded-lg flex hover:bg-opacity-80'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                  </svg>

                  <p className='my-1 ms-2'>More Info</p></button>
        </div>
    </div>
  )
}

export default VedioTitle