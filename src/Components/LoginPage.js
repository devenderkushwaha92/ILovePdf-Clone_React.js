import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="left-div w-full md:w-1/2">
        <div className="flex flex-col items-center justify-center pt-20">
          <img src="images/Logo.png" alt="" />
        </div>
        <div className="flex items-center justify-center pt-2 text-4xl">
          <h2 className="text-gray-600">Create new account</h2>
        </div>
        <div className="flex items-center justify-center pt-4">
          <img src="images/image.png" alt="" />
        </div>
        <div className="flex items-center justify-center pt-2 text-4xl">
          <form>
            <input className="text w-80 rounded border-2" placeholder="User name" />
          </form>
        </div>
        <div className="flex items-center justify-center pt-2 text-4xl">
          <form>
            <input className="text w-80 rounded border-2" placeholder="Password" />
          </form>
        </div>
        <div className="flex items-center justify-center pt-2 text-xl mt-0">
          <p className="text-lg mt-2 text-gray-700">
            <u className="text-red-600 font-bold">Forgot Password</u>
          </p>
        </div>
        <div className="flex items-center justify-center pt-2 text-xl mt-2">
          <button className="bg-red-500 rounded-xl p-2 text-white font-bold">Login</button>
        </div>
        <div className="flex items-center justify-center pt-2 text-xl mt-2">
          <p className="text-lg mt-2 text-gray-700">
            Don't Have Account? <Link to="/SignUpPage"><u className="text-red-600 font-bold">Create an Account</u></Link>
          </p>
        </div>
        <div className="flex items-center justify-center pt-2 text-xl mt-2 xs:ml-4">
          <p className="text-sm mt-1 text-gray-700">By creating an account, you agree to iLovePDF Terms of Service and Privacy Policy</p>
        </div>
      </div>

      <div className="w-full bg-gray-300 mt-8 md:mt-0 md:w-1/2">
        <div className="flex items-center justify-center pt-2 text-xl mt-20 mb-10">
          <img src="images/signup.png" alt="" />
        </div>
        <div className="flex items-left justify-center pt-2 text-xl mt-2 mb-2 mr-24">
          <h1 className="text-2xl text-gray-700 font-bold xs:ml-5 xs:text-xl">PDF tools for productive people</h1>
        </div>
        <div className="flex items-center justify-center pt-2 text-lg mt-2 mb-2 p-14">
          <p className="text-gray-700">iLovePDF helps you convert, edit, e-sign, and protect PDF files quickly and easily. Enjoy a full suite of tools to effectively manage documents — no matter where you’re working.</p>
        </div>
      </div>
    </div>
  );
}
