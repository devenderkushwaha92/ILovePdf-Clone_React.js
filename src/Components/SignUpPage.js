import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUpPage() {
  return (

        <div className="flex xs:flex-col  sm:flex-col md:flex-col md: lg:flex-row xl:flex-row">
            <div className="w-1/2 xs:w-auto md:w-auto lg:w-1/2 ">

                    <div className='flex items-center justify-center pt-20'>
                      <img src="images/Logo.png" alt="" />
                    </div>
                    <div className='flex items-center justify-center pt-2 text-4xl'>
                      <h className=' text-gray-600  '>Create new account</h>
                    </div>
                    <div className='flex items-center justify-center pt-4'>
                      <img src="images/image.png" alt="" />
                    </div>
               
                  <div className='flex items-center justify-center pt-2 text-xl'>
                      <form className=''>
                          <input className='text w-80 rounded border-2  ; xs:text-3xl' placeholder='name'/>
                      </form>
                  </div>
                  <div className='flex items-center justify-center pt-2 text-xl'>
                     <form className=''>
                        <input className='text w-80 rounded border-2  xs:text-3xl' placeholder='email'/>
                     </form>
                  </div>
                  <div className='flex items-center justify-center pt-2 text-xl'>
                     <form className=''>
                        <input className='text w-80 rounded border-2 xs:text-3xl' placeholder='password'/>
                    </form>
                  </div>
                  <div className='flex items-center justify-center pt-2 text-xl mt-2'>
                    <button className='bg-red-500 rounded-xl p-2 text-white font-bold-sm'>SignUp</button>
                  </div>
                  <div className='flex items-center justify-center pt-2 text-xl mt-2'>
                    <p className='flex items-center justify-center pt-2 text-lg mt-2 text-gray-700'>Already member ? <Link to="/LoginPage"> <u className='text-red-600 font-bold'>Log in</u></Link></p>
                  </div>
                 <div className='flex items-center justify-center pt-2 text-xl mt-2'>
                    <p className='flex items-center justify-center text-center p-2 text-sm mt-1 text-gray-700'>By creating an account, you agree to iLovePDF Terms of Service and Privacy Policy</p>
                 </div>
            </div>
            <div className="w-1/3 bg-gray-300 xs:w-auto mt-8 md:w-auto lg:w-1/2 ">
                 <div className='flex items-center justify-center pt-2 text-xl mt-20 mb-10'>
                   <img src="images/signup.png" alt="" />
                 </div>
                 <div className='flex items-left justify-center pt-2 text-xl mt-2 mb-2 mr-24'>
                   <h1 className='text-2xl text-gray-700 font-bold ml-10 md:ml-20 xs:text-xl'>PDF tools for productive people</h1>
                 </div>
                 <div className='flex items-center justify-center pt-2 text-lg mt-2 mb-2 p-14 '>
                 <p className='text-gray-700 '>iLovePDF helps you convert, edit, e-sign, and protect PDF files quickly and easily. Enjoy a full suite of tools to effectively manage documents —no matter where you’re working.</p>
                 </div>           
            </div>   
          
       </div>
 
  )
}
