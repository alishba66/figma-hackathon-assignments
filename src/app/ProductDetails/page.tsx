
//this page is open when click on 'browse to shop'
import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import Image from 'next/image'
import { CiHeart } from "react-icons/ci"
import { FaFacebook } from "react-icons/fa"
import { PiInstagramLogoFill } from "react-icons/pi"
import { FaSquareTwitter } from "react-icons/fa6"
import Props5 from '@/components/Props5'

const page = () => {
  return (
    <div>
      {/* Header Section */}
      <div className='w-full h-[286px] bg-[#F6F5FF]'>
        <h1 className='text-4xl relative left-24 top-16 text-blue-950 font-bold '>Shop Left Sidebar</h1>
        <p className='font-medium text-base text-blue-950 relative left-24 top-16 '>Home Shop <span className='text-pink-700'> . Product Details</span></p>
      </div>

      {/* Sidebar Section */}
      <div className='bg-white w-full md:w-[1170px] h-[509px] pt-16'>
        <div className='ml-20 flex flex-col space-y-4'>
          <Image src={'/bag1.png'} alt='hand bag' width={151} height={155} />
          <Image src={'/bag2.png'} alt='hand bag' width={151} height={155} />
          <Image src={'/bag3.png'} alt='hand bag' width={151} height={155} />
        </div>
        <Image src={'/bag4.png'} alt='hand bag' width={375} height={487} className='flex relative bottom-[490px] ml-64' />
      </div>

      {/* Product Details Section */}
      <div className='flex flex-col relative bottom-[490px] ml-[680px]'>
        <h1 className='text-blue-900 flex flex-col space-y-4 text-3xl pb-2 pt-20'>Playwood arm chair</h1>
        <Image src={'/5stars.png'} alt='stars' width={69} height={12} className='pb-3' />
        <p className='pb-3 gap-5 text-blue-800'>$32.00<span className='text-pink-500'>$32.00</span></p>
        <p className='pb-3 text-blue-800'>Color</p>
        <p className='text-[14px] pb-3 text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
        <div className='flex gap-4 text-[20px] ml-10 pb-3 text-blue-800'>
          Add To cart <p className='pt-2'><CiHeart /></p>
        </div>
        <p className='pb-3 text-blue-800'>Categories:</p>
        <p className='pb-3 text-blue-800'>Tags</p>
        <div className='flex gap-4 text-blue-800'>
          Share <p className='gap-4 flex pt-1'>
            <FaFacebook /> <PiInstagramLogoFill /> <FaSquareTwitter />
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div className='w-full md:w-[1000px] h-[500px] bg-[#F9F8FE] relative bottom-64'>
        <ul className='flex text-1xl text-blue-900 gap-5 ml-20 font-bold pt-7'>
          <li>Description</li>
          <li>Additional Info</li>
          <li>Reviews</li>
          <li>Video</li>
        </ul>
        <h3 className='pt-8 text-1xl text-blue-900 gap-5 ml-20 font-bold'>Varius tempor.</h3>
        <p className='text-gray-400 text-sm ml-20 pt-4'>
          Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum.
          <br /> Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus
          <br /> cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
        </p>
        <h4 className='pt-8 text-1xl text-blue-900 gap-5 ml-20 font-bold'>More details</h4>
        <p className='flex text-gray-400 text-sm ml-20 pt-4 gap-3'>
          <FaArrowRight className='flex text-black' />Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.
        </p>
        <p className='flex text-gray-400 text-sm ml-20 pt-4 gap-3'>
          <FaArrowRight className='flex text-black' />Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.
        </p>
        <p className='flex text-gray-400 text-sm ml-20 pt-4 gap-3'>
          <FaArrowRight className='flex text-black' />Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.
        </p>
        <p className='flex text-gray-400 text-sm ml-20 pt-4 gap-3'>
          <FaArrowRight className='flex text-black' />Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis.
        </p>
      </div>

      {/* Related Products Section */}
      <div className='relative bottom-44'>
        <div className='text-blue-950 ml-20 font-bold text-[20px] pb-4 '>Related Products</div>
        <div className='flex'>
          <Props5 Image1='/d1.png' name='Mens Fashion Wear' Image2='/5stars.png' price='$43.00' />
          <Props5 Image1='/d2.png' name='Women’s Fashion' Image2='/5stars.png' price='$67.00' />
          <Props5 Image1='/d3.png' name='Wolx Dummy Fashion' Image2='/5stars.png' price='$67.00' />
          <Props5 Image1='/d4.png' name='Top Wall Digital Clock' Image2='/5stars.png' price='$51.00' />
        </div>
      </div>

      {/* Footer Image */}
      <div>
        <Image
          src={"/last.png"}
          alt='last'
          height={93}
          width={904}
          className='relative bottom-72 ml-16'
        />
      </div>
    </div>
  )
}

export default page
