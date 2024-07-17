import React from 'react'

export default function SplitPdf() {
  return (
    <div className='flex flex-col items-center justify-center v-screen bg-gray-100 h-screen '>
    <h1 className='text-4xl font-extrabold text-center my-2 p-8 text-gray-600'>
      <strong>Split PDF</strong>
    </h1>

    <h5 className='text-2xl text-center text-gray-500'>
    Separate one page or a whole set for easy conversion into independent PDF files.
    </h5>
      
    <button type="file" className='mt-8 h-20  w-60 bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
      Select PDF File
    </button>
    
  </div>
  )
}
