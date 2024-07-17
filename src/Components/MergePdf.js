import React, { useState } from 'react';

export default function MergePdf() {
  
   

  return (

    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <h1 className='text-2xl md:text-4xl font-extrabold text-center my-2 md:my-4 p-4 text-gray-600'>
        <strong>Merge PDF</strong>
      </h1>

      <h5 className='text-lg md:text-2xl text-center text-gray-500'>
        Combine PDFs in the order you want with the easiest PDF merger available.
      </h5>

      <button
        type="button" onClick={render}
        className='mt-4 md:mt-8 h-12 md:h-20 w-40 md:w-60 bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
      >
        Select PDF File
      </button>
      <div className=''>Render When click </div>
    </div>
  )
}

