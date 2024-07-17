import React from 'react'

export default function Herobox(props) {
  
  return (
    <> 
    <div className='w-auto hidden md:flex lg:flex xl:flex'>
           <div className='h-64 w-60 my-9 mx-2 shadow-md  flex-col items-vertical border-1 rounded  bg-gray-100'>
             <div className="icon-di mt-2 h-12 w-12 mx-6 ">
               <img src={props.link} alt="" />
             </div>
             
             <div className="title-div mt-3 h-8 w-36 mx-6">
               <h1><strong>{props.title}</strong></h1>
             </div>
             <div className="discription-div mt-1 h-24 w-48 mx-6">
               <h4>{props.discription}</h4>
             </div>
           </div>
    </div>
    {/* // This hero box is for small screen */}
    <div className='hidden xs:flex sm:flex md:hidden lg:hidden xl:hidden'>
    <div className={`${props.height} w-96  my-1 mx-2 shadow-md  flex-col items-vertical border-1 rounded bg-white`}>
        <div className='flex flex-row '>
          <div className="icon-div mt-2 h-16 w-20 ml-6 ">
            <img  src={props.link} alt="" />
          </div>
          <div className="title-div mt-7 h-8 w-36 ">
            <h1><strong>{props.title}</strong></h1>
          </div>
        </div>
      <div className="discription-div h-8 w-auto mx-10">
        <h4>{props.discription}</h4>
      </div>
    </div>
    </div>
    </>
  )
}
