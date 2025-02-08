"use client";

import React, { useState } from 'react'
import Image from 'next/image'

const Page = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage('Both fields are required.')
    } else {
      setErrorMessage('')
      // Add your sign-in logic here (e.g., call an API)
      alert('Login Successful')
    }
  }

  return (
    <div>
      <div className='w-full h-[200px] bg-[#F6F5FF]'>
        <h1 className='text-4xl relative left-24 top-16 text-blue-950 font-bold '>My Account</h1>
        <p className='font-medium text-base text-blue-950 relative left-24 top-16 '>Home Shop <span className='text-pink-700'>My Account</span></p>
      </div>
      
      <div className='flex justify-center pt-12'>
        <div className='w-full max-w-[544px] h-[474px] bg-[#FFFFFF]'>
          <div className='w-full max-w-[433px] h-[374px] bg-[#FFFFFF] mx-auto pt-10'>
            <h1 className='font-bold text-center text-3xl'>Login</h1>
            <p className='text-gray-500 text-center'>Please login using account details below.</p>

            {/* Error message */}
            {errorMessage && <p className='text-red-500 text-center'>{errorMessage}</p>}

            <div className='pt-5'>
              <input
                className='w-full h-[47px] border-2'
                placeholder='Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='pt-5'>
              <input
                className='w-full h-[47px] border-2'
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <p className='text-gray-500 text-sm pt-5 pb-5'>Forgot your password?</p>
            
            <div>
              <button 
                className='w-full h-[47px] bg-[#FB2E86] text-white text-center'
                onClick={handleLogin}
              >
                Sign In
              </button>
            </div>

            <p className='text-gray-500 text-sm text-center pt-12'>
              Don’t have an Account? <span className='text-pink-700'>Create account</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <Image
          src={"/last.png"}
          alt='last'
          height={93}
          width={904}
          className='relative bottom ml-8 pb-10'
        />
      </div>
    </div>
  )
}

export default Page
