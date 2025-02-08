import React from 'react'
import { FaFacebook } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"  
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-[#EEEFFB]'>
      <div className="flex flex-wrap justify-center border-x-4 border-b-2 md:flex-nowrap lg:flex-nowrap">
        <div className="pt-11 p-20 md:p-10 lg:p-20 w-full md:w-1/2 lg:w-1/3">
          <h1 className="font-bold text-3xl text-black pt-16">Hekto</h1>
          <div className='flex'>
            <input type='search' placeholder='Enter your Email' />
            <button className='w-72 h-5 rounded bg-pink-700 text-white text-base'>Sign Up</button>
          </div>
          <p className="text-gray-400 font-medium text-base pt-5">
            Contact Info <br />
            17 Princess Road London Greater London NW1 8JR UK
          </p>
        </div>
        <div className="grid lg:grid-rows-[50px_50px_50px_50px_50px] lg:grid-cols-[200px_200px_200px] pt-28 w-full md:w-1/2 lg:w-2/3">
          <div className="font-semibold text-xl">Categories</div>
          <div className="font-semibold text-xl">Customer Care</div>
          <div className="font-semibold text-xl"><Link href={'./Shoplist'}>Pages</Link></div>
          <div className="text-gray-500">Laptops & Computers</div>
          <div className="text-gray-500">My Account</div>
          <div className="text-gray-500"><Link href={'./blog'}>Blog</Link></div>
          <div className="text-gray-500">Cameras & Photography</div>
          <div className="text-gray-500">Discount</div>
          <div className="text-gray-500"><Link href={'./ProductDetails'}>Browse the Shop</Link></div>
          <div className="text-gray-500">Smart Phones & Tablets</div>
          <div className="text-gray-500">Returns</div>
          <div className="text-gray-500"><Link href={'./Product'}>Category</Link></div>
          <div className="text-gray-500">Video Games & Consoles</div>
          <div className="text-gray-500">Orders History</div>
          <div className="text-gray-500"><Link href={'./FAQ'}>Pre-Built Pages</Link></div>
          <div className="text-gray-500">Waterproof Headphones</div>
          <div className="text-gray-500"><Link href={'./not-found'}>Order Tracking</Link></div>
          <div className="text-gray-500">Visual Composer Elements</div>
        </div>
      </div>
      <div className='flex pt-7 pb-11 p-5'>
        <div className="font-semibold text-base w-full ">©Webecy - All Rights Reserved</div>
        <div className='flex gap-7 text-2xl'>
          <FaFacebook />
          <FaInstagramSquare />
          <FaTwitter />  
        </div>
      </div>
    </div>
  )
}

export default Footer
