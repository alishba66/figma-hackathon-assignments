import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero10 = () => {
  return (
    <div>
      <div className='pt-48'>
        <Image src={'/background.png'} alt="bg-image" width={1920} height={462} />
      </div>
      
      <div className='relative -mt-44 text-center'>
        <h1 className='text-4xl text-blue-900'>
          Get Latest Update By Subscribe<br />
          Our Newsletter
        </h1>

        <div className='pt-7'>
          <Link href={'./s-work'}><button className='w-40 h-14 rounded bg-pink-700 text-white text-base'>
            Shop Now
          </button></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero10

