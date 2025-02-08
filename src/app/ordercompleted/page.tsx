import React from 'react'
import Image from 'next/image'
import { TiTick } from "react-icons/ti"

const page = () => {
  return (
    <div>
      <div className='w-full h-[286px] bg-[#F6F5FF]'>
        <h1 className='text-4xl relative left-24 top-16 text-blue-950 font-bold'>Order Completed</h1>
        <p className='font-medium text-base text-blue-950 relative left-24 top-16'>Home Shop <span className='text-pink-700'>Order Completed</span></p>
      </div>

      <Image src={'/clock.png'} alt='clock' width={94} height={94} className='ml-40 relative top-16' />

      <div className='w-[625px] h-[326px] ml-72'>
        <TiTick className='ml-60 text-pink-500 text-4xl' />
        <h2 className='ml-32 text-2xl text-blue-950 font-bold pb-4'>Your Order Is Completed!</h2>
        <p className='text-sm text-gray-400'>Thank you for your order! Your order is being processed and will be completed within 3-6 hours.</p>
        <p className='text-sm text-gray-400 ml-10 pb-5'>You will receive an email confirmation when your order is completed.</p>

        <button className='w-[208px] h-[59px] bg-[#FB2E86] text-white text-center ml-40'>Continue Shopping</button>
      </div>

      <Image src={'/checklist.png'} alt='checklist' width={70} height={70} className='relative left-[800px] bottom-6' />

      <div>
        <Image src={"/last.png"} alt='last' height={93} width={904} className='relative bottom ml-16 pt-12 pb-12' />
      </div>
    </div>
  )
}

export default page
