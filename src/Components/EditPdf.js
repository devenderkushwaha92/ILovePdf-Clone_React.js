import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import {pdfjs} from 'react-pdf';

export default function EditPdf() {
    // workern
    // pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    //     '/src/utils/pdf.worker.min.mjs',
    //     import.meta.url,
    // ).toString();    
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileUrl, setFileUrl] = useState(null);

    const handleOnFileSelect = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        if (file) {
            setFileUrl(URL.createObjectURL(file));
        }
    };

    return (
        <>
            <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
                <h1 className='text-2xl md:text-4xl font-extrabold text-center my-2 md:my-4 p-4 text-gray-600'>
                    <strong>Edit PDF</strong>
                </h1>

                <h5 className='text-lg md:text-2xl text-center text-gray-500'>
                    Edit PDFs in the order you want with the easiest PDF Editor available.
                </h5>

                <div className='mt-4 md:mt-8 h-12 md:h-20 w-40 md:w-60 text-black font-bold py-2 px-4 rounded'>
                    <input type='file' onChange={handleOnFileSelect} />
                </div>

                <button
                    type="button"
                    className='mt-4 md:mt-8 h-12 md:h-20 w-40 md:w-60 bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                >
                    Upload PDF File
                </button>

                {fileUrl && (
                    <div style={{ width: '100%', height: '500px', marginTop: '20px' }}>
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                            <Viewer fileUrl={fileUrl} />
                        </Worker>
                    </div>
                )}
            </div>
        </>
    );
}

