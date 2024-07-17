import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Herobox from './Herobox';

export default function Navbar(props) {
  const [showDiv, setShowDiv] = useState(false);

  const handleOnMouseEnter = () => {
    setShowDiv(true);
  };

  const handleOnMouseLeave = () => {
    setShowDiv(false);
  };
// for convert pdf
const [showConvertPdfDiv, setShowConvertPdfDiv] = useState(false);

  const handleConvertPdfOnMouseEnter = () => {
    setShowConvertPdfDiv(true);
  };

  const handleConvertPdfOnMouseLeave = () => {
    setShowConvertPdfDiv(false);
  };
  //For Show List Of tools When hover on tool icon
  const[showTools,setShowTools]=useState(false);
  const handleShowToolsOnMouseEnter = () =>{
        setShowTools(true);

     };
     const handleShowToolsOnMouseLeave = () =>{
      setShowTools(false);
     }
// const navList=[
//   { id: 'merge-pdf', label: 'Merge PDF' },
//   { id: 'split-pdf', label: 'Split PDF' },
//   { id: 'compress-pdf', label: 'Compress PDF' },
//   { id: 'convert-pdf', label: 'Convert PDF' },
//   { id: 'all-tools', label: 'All PDF Tools' }
// ]
  return (
    <div className='bg-white w-full flex items-center xs:sticky xs:top-0 xs:w-auto sm:w-auto md:w-auto lg:w-auto xl:w-auto'>
        
        <div className=" ml-6 w-auto hover:text-red-700 xl:ml-12 ">
           
           <div class="xs:h-16 xs:pt-3 w-28 md:h-auto xl:w-40 xl:h-auto">
           <Link to="/"> <img src="images/Logo.png" alt="" /> </Link>
           </div>
        </div>
        
        {/* <This code work on xs and sm and md screen with> */}
            <div className="flex ml-auto float-left lg:hidden">
                <div className="p-2"onMouseEnter={handleShowToolsOnMouseEnter} onMouseLeave={handleShowToolsOnMouseLeave}>
                   <div class="" >
                       <Link to="">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
                         <path stroke-linecap="round" stroke-linejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
                       </svg>
                       </Link>
                   {showTools &&(
                           <div className='absolute top-full right-0 flex-col mt-0 p-2 bg-white border rounded shadow-lg flex  w-auto overflow-y-auto max-h-64'>
                              <Herobox link='images/merge-icon.png' title='Merge PDF  'height='h-20' />
                              <Herobox link='images/split-icon.png' title='Split PDF 'height='h-20'/>
                              <Herobox link='images/compress-icon.png' title='Compress PDF' height='h-20' />
                              <Herobox link='images/merge-icon.png' title='Merge PDF ' height='h-20' />
                              <Herobox link='images/split-icon.png' title='Split PDF' height='h-20'/>
                              <Herobox link='images/compress-icon.png' title='Compress PDF' height='h-20' />
                              <Herobox link='images/merge-icon.png' title='Merge PDF ' height='h-20' />
                              <Herobox link='images/split-icon.png' title='Split PDF' height='h-20' />
                              <Herobox link='images/compress-icon.png' title='Compress PDF' height='h-20' />
                           </div>
                       )}
                   </div>
                </div>
                
                <div className="p-2">
                   <div class="">
                   <Link to="/SignUpPage">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    </Link>
                   </div>
                </div>
                
                <div className="p-2">
                   <div class="">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                     </svg>
                   </div>
                </div>
              </div> 
          {/* <This code work on xs and sm screen with/> */}

          {/* < this code work on lg xl screen width> */}
          <div className='hidden lg:flex justify-center text-center mt-5 '>
               <div className=" ml-6 w-auto hover:text-red-700  xl:w-auto">
                  <div class="h=auto w-24  xl:text-xl xl:w-32 xl:ml-3 ">
                     <Link to="/MergePdf"><strong>Merge PDF</strong></Link>
                  </div>
               </div>
               
               <div className=" hover:text-red-700 ">
                  <div class="h=auto w-24 xl:text-xl xl:ml-3" >
                     <Link to="/SplitPdf"><strong>Split PDF</strong></Link>
                  </div>
               </div>
               <div className=" hover:text-red-700 ">
                  <div class="h=12 w-32 xl:text-xl xl:w-36 xl:ml-3" >
                     <Link to="/CompressPdf"><strong>Compress PDF</strong></Link>
                  </div>  
               </div>
               <div className=" hover:text-red-700 relative " onMouseEnter={handleConvertPdfOnMouseEnter} onMouseLeave={handleConvertPdfOnMouseLeave} >
                  <div class="h=12 w-32 xl:text-xl xl:w-36 xl:ml-3" >
                     <Link to="/"><strong>Convert PDF</strong></Link>
                  </div>
                     {showConvertPdfDiv && (
                          <div className="absolute top-full left-0 mt-2 p-2 bg-white border rounded shadow-lg flex h-auto w-auto">
                            <div className="left w-40 p-2 pl-8 pr-4">
                                <p className='text-gray-500 font-bold '>Convert To Pdf</p>
                                <p className='text-black mt-4 font-serif'>Word To PDF</p>
                                <p className='text-black mt-4 font-serif'>Txt To PDF</p>
                                <p className='text-black mt-4 font-serif'>Excel To PDF</p>
                                <p className='text-black mt-4 font-serif'>jpg To PDF</p>
                            </div>
                            <div className="w-48 p-2 ml-4  pl-8 pr-4">
                                <p className='text-gray-500 font-bold '>Convert From Pdf</p>
                                <p className='text-black mt-4 font-serif'>  PDF To Word</p>
                                <p className='text-black mt-4 font-serif'> PDF To Txt </p>
                                <p className='text-black mt-4 font-serif'>  PDF To Excel</p>
                                <p className='text-black mt-4 font-serif'> PDF To jpg </p>
                            </div>
                         </div>
                     )}
               </div>
               <div className=" hover:text-red-700 relative hidden sm:block"  onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} >
                   <div class="h=12 w-32 xl:text-xl xl:w-32 xl:ml-3" >
                       <Link to="/"><strong>All PDF Tools</strong></Link>
                   </div>
                   {showDiv && (
                         <div className="absolute top-full left-0 mt-2 p-2 bg-white border rounded shadow-lg flex h-auto w-auto">
            {/* Content of the div shown on hover */}
               <div className='flex h-auto w-auto mr-8'>
                  
                    <div className="title-div w-auto">
                         <h1 className='w-28'><strong>Merge PDF</strong></h1>
                    </div>
               </div>

               <div className='flex h-auto w-auto mr-8'>
                    
                    <div className="title-div w-auto">
                         <h1 className='w-28'><strong>Split PDF</strong></h1>
                    </div>
               </div>

               <div className='flex h-auto w-auto mr-8'>
                    
                    <div className="title-div w-auto">
                         <h1 className='w-28'><strong>Compress PDF</strong></h1>
                    </div>
               </div>
                </div>
                   )}
               </div>
               
               <div className="Right-Nav w-auto h-12 flex float-right md:ml-32 lg:ml-40 xl:ml-56 bg-white">
                  <div className="mt-1.5 flex hover:text-white hover:bg-red-500 rounded ">
                     <div class="h=auto w-auto " >
                        <Link to="/LoginPage"><strong>login</strong></Link>
                     </div>
                  </div>
                  <div className="ml-8 flex hover:text-white hover:bg-red-500 rounded">
                     <div class=" " >
                        <button className='bg-red-500 rounded-lg p-1.5 text-white xs:h-auto'>
                           <Link to="/SignUpPage"><strong>SignUp</strong></Link>
                        </button>
                     </div>
                  </div>
               </div>
          </div>  
           {/* < this code work on md xl screen width /> */}  
    </div>
  );
}
