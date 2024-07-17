import React from 'react'
import Herobox from './Herobox'
import Footer from "./Footer";
export default function Hero() {
  return (
    <>
      <div className='xs:bg-gray-200  w-full md:w-auto lg:w-auto' >
          <h1 className="text-4xl font-extrabold text-center my-2 p-8 text-gray-600 xs:text-3xl xs:p-4">Every tool you need to work with PDFs in one place</h1>
          <h3 className='text-2xl  text-center text-gray-500 xs:p-2 xs:text-xl'>Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.</h3>
      </div>
            <div className="hero-box flex items-center justify-center xs:flex-col md:flex-row flex-wrap">
              <Herobox link='images/merge-icon.png' title='Merge PDF ' discription='Combine Your PDFs in Order You Want in the Easiest Way .' height='h-36'/>
              <Herobox link='images/split-icon.png' title='Split PDF' discription='Separate one page or a whole set for easy conversion into independent PDF files' height='h-36'/>
              <Herobox link='images/compress-icon.png' title='Compress PDF' discription='
                Reduce file size while optimizing for maximal PDF quality.'height='h-36' />
              <Herobox link='images/word.png' title='PDF to Word' discription='
                Easily convert your PDF files into easy to edit DOC and DOCX document. The converted WORD document is 100% accurate.' />
              <Herobox link='images/ppt.png' title='PDF to PowerPoint' discription='
                Turn your PDF files into easy to edit PPT and PPTX slideshows.' height='h-36'/>
                <Herobox link='images/merge-icon.png' title='Merge PDF ' discription='Combine Your PDFs in Order You Want in the Easiest Way .'height='h-36'/>
              <Herobox link='images/split-icon.png' title='Split PDF' discription='Separate one page or a whole set for easy conversion into independent PDF files' height='h-36'/>
              <Herobox link='images/compress-icon.png' title='Compress PDF' discription='
                Reduce file size while optimizing for maximal PDF quality.' height='h-36'/>
              <Herobox link='images/word.png' title='PDF to Word' discription='
                Easily convert your PDF files into easy to edit DOC and DOCX document. The converted WORD document is 100% accurate.' height='h-36'/>
              <Herobox link='images/ppt.png' title='PDF to PowerPoint' discription='
                Turn your PDF files into easy to edit PPT and PPTX slideshows.' height='h-36'/>
                <Herobox link='images/merge-icon.png' title='Merge PDF ' discription='Combine Your PDFs in Order You Want in the Easiest Way .' height='h-36'/>
              <Herobox link='images/split-icon.png' title='Split PDF' discription='Separate one page or a whole set for easy conversion into independent PDF files' height='h-36'/>
              <Herobox link='images/compress-icon.png' title='Compress PDF' discription='
                Reduce file size while optimizing for maximal PDF quality.' height='h-36'/>
              <Herobox link='images/word.png' title='PDF to Word' discription='
                Easily convert your PDF files into easy to edit DOC and DOCX document. The converted WORD document is 100% accurate.' height='h-36'/>
              <Herobox link='images/ppt.png' title='PDF to PowerPoint' discription='
                Turn your PDF files into easy to edit PPT and PPTX slideshows.' height='h-36'/>
            </div> 

            {/* <div className="hero-box flex items-center justify-center xs:flex-col lg:flex-row flex-wrap">
                <Herobox link='images/merge-icon.png' title='Merge PDF ' discription='Edit PDF
                  Add text, images, shapes or freehand annotations to a PDF document. Edit the size, font, and color of the added content'/>
                <Herobox link='images/excel.png' title='PDF to Excel' discription='
                  Pull data straight from PDFs into Excel spreadsheets in a few short seconds.' />
                <Herobox link='images/word.png' title='Word to PDF' discription='
                  Make DOC and DOCX files easy to read by converting them to PDF.' />
                <Herobox link='images/ppt.png' title='PowerPoint to PDF' discription='
                  Make PPT and PPTX slideshows easy to view by converting them to PDF' />
                <Herobox link='images/excel.png' title='Excel to PDF' discription='
                  Make EXCEL spreadsheets easy to read by converting them to PDF.' />
           </div> */}

            {/* <div className="hero-box flex items-center justify-center xs:flex-col lg:flex-row ">
      <Herobox link='images/merge-icon.png' title='Merge PDF ' discription='Combine Your PDFs in Order You Want in the Easiest Way .'/>
      <Herobox link='images/split-icon.png' title='Split PDF' discription='Separate one page or a whole set for easy conversion into independent PDF files' />
      <Herobox link='images/compress-icon.png' title='Compress PDF' discription='
        Reduce file size while optimizing for maximal PDF quality.' />
      <Herobox link='images/word.png' title='PDF to Word' discription='
        Easily convert your PDF files into easy to edit DOC and DOCX document. The converted WORD document is 100% accurate.' />
      <Herobox link='images/ppt.png' title='PDF to PowerPoint' discription='
        Turn your PDF files into easy to edit PPT and PPTX slideshows.' />
            </div> */}

    
      {/* This is Mid Hero Section  */}
    <div className='mb-8'>
        <div className="heading  flex items-center justify-center text-4xl font-extrabold text-center my-2 p-8 text-gray-700 ">
        <h1 >Looking for another solution?</h1>
        </div>
        <div className='flex items-center justify-center mb-20 xs:flex-col sm:flex-col md:flex-row lg-flex-row xl:flex-row'>
           <div className="card1 w-auto h-auto ml-16 ">
              <h1 className='text-center mt-8 text-xl text-gray-800'><strong>iLovePDF Desktop</strong></h1>
              <h4 className='mt-4'>Download the <span className='text-red-700'><u>iLovePDF Desktop App </u></span>to work with your favorite PDF tools on your Mac or Windows PC. Get a lightweight PDF app that helps you process heavy PDF tasks offline in seconds.</h4>
           </div>
           <div className="card1 w-auto h-auto ml-16 ">
              <h1 className='text-center mt-8 text-xl text-gray-800'><strong>iLovePDF Mobile</strong></h1>
              <h4 className='mt-4'>Get the <span className='text-red-700'><u>iLovePDF Mobile App </u></span> to manage documents remotely or on the move. Turn your Android or iPhone device into a PDF Editor & Scanner to annotate, sign, and share documents with ease.</h4>
           </div>
           <div className="card1 w-auto h-auto ml-16 ">
              <h1 className='text-center mt-8 text-xl text-gray-800'><strong>iLoveIMG</strong></h1>
              <h4 className='mt-4'><span className='text-red-700'><u>iLoveIMG </u></span>is the web app that helps you modify images in bulk for free. Crop, resize, compress, convert, and more. All the tools you need to enhance your images in just a few clicks.</h4>
           </div>
       </div>

    </div>
    <div className='h-auto w-auto p-2 bg-gray-800'>
        <div className=' mx-8 my-8  flex xs:flex-col sm:flex-col md:flex-row :'>
          
            <div className='w-auto ml-8'>
                <h1 className=' text-4xl font-extrabold my-1 text-white  xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl'>Get more with Premium</h1>
                <p className='text-lg font-bold text-white xs:text-lg lg:text-xl'>Complete projects faster with batch file processing,convert scanned documents with OCR and e-sign your business  agreements.</p>
                <br/>
                <button className='bg-yellow-600 rounded p-3'><strong> Get Primium</strong></button>
            </div>
            <div className='w-auto item-center'>
                <img className="ml-auto mt-4 h-76 w-76 rounded xs:ml-2" src="images/hero-div.png" alt="" />
            </div>
        </div>
    </div>
    <Footer/> 
    </>
  )
}
