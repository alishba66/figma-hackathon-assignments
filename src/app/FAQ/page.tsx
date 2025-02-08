import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        {/* Header Section */}
        <div className='w-full h-[286px] bg-[#F6F5FF]'>
            <h1 className='text-4xl text-blue-950 font-bold absolute left-24 top-16 sm:left-24 sm:top-16'>FAQ</h1>
            <p className='font-medium text-base text-blue-950 absolute left-24 top-24 sm:left-24 sm:top-16'>
                Home Shop <span className='text-pink-700'>FAQ</span>
            </p>
        </div>

        {/* FAQ and Ask a Question Section */}
        <div className='flex flex-col sm:flex-row ml-4 sm:ml-5 mt-10'>
            {/* FAQ Content Section */}
            <div className='sm:w-[60%]'>
                <h1 className='text-blue-900 text-2xl font-bold pt-6'>General Information</h1>
                <h3 className='text-blue-900 pt-10'>Eu dictumst cum at sed euismood condimentum?</h3>
                <p className='text-gray-400 text-sm pt-3 pb-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed<br />
                    tristique mollis vitae, consequat gravida sagittis.
                </p>

                <h3 className='text-blue-900 pt-10'>Magna bibendum est fermentum eros.</h3>
                <p className='text-gray-400 text-sm pt-3 pb-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed<br />
                    tristique mollis vitae, consequat gravida sagittis.
                </p>

                <h3 className='text-blue-900 pt-10'>Odio muskana hak eris conseekin sceleton?</h3>
                <p className='text-gray-400 text-sm pt-3 pb-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed<br />
                    tristique mollis vitae, consequat gravida sagittis.
                </p>

                <h3 className='text-blue-900 pt-10'>Elit id blandit sabara boi velit gua mara?</h3>
                <p className='text-gray-400 text-sm pt-3 pb-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed<br />
                    tristique mollis vitae, consequat gravida sagittis.
                </p>
            </div>

            {/* Ask a Question Section */}
            <div className='sm:w-[35%] bg-[#CDCEDC] ml-5 p-6 rounded-lg'>
                <h2 className='text-2xl text-blue-900 font-bold'>Ask a Question</h2>

                <div className='pt-6'>
                    <input className='border-4 w-full sm:w-[90%]' placeholder='Your Name*' />
                </div>
                <div className='pt-6'>
                    <input className='border-4 w-full sm:w-[90%]' placeholder='Your Email*' />
                </div>
                <div className='pt-6'>
                    <textarea className='ml-4 border-4 w-full sm:w-[90%] h-[164px]' placeholder='Type Your Message*' />
                </div>
                <div className='pt-6'>
                    <button className='bg-pink-500 w-[157px] h-[44px] text-white'>Send Mail</button>
                </div>
            </div>
        </div>

        {/* Last Image Section */}
        <div className='text-center'>
            <Image
                src={"/last.png"}
                alt='last'
                height={93}
                width={904}
                className='mx-auto'
            />
        </div>
    </div>
  )
}

export default page
