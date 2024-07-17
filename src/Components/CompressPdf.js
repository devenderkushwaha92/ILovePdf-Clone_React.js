import React from 'react'

export default function CompressPdf() {
  return (
    <div className='flex flex-col items-center justify-center v-screen bg-gray-100 h-screen '>
    <h1 className='text-4xl font-extrabold text-center my-2 p-8 text-gray-600'>
      <strong>Compress PDF</strong>
    </h1>

    <h5 className='text-2xl text-center text-gray-500'>
    Reduce file size while optimizing for maximal PDF quality.
    </h5>
      
    <button type="file" className='mt-8 h-20  w-60 bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
      Select PDF File
    </button>
    
  </div>
  )
}
