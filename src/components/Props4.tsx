import React from 'react'
import Image from 'next/image'

type Props4 = {
  Image1: string,
  heading: string,
  price: string,
  para: string,
  Image2: string,
}

const Shoplist = ({ Image1, heading, price, para, Image2 }: Props4) => {
  return (
    <div className="flex items-center space-x-8 pl-10 pr-10 py-8 bg-white rounded-lg shadow-md">
      {/* Product Image */}
      <div className="w-[313px] h-[217px]">
        <Image src={Image1} alt="Product Image" width={313} height={217} />
      </div>

      {/* Product Details */}
      <div className="flex flex-col space-y-4 w-full">
        <p className="text-blue-800 font-bold text-2xl">{heading}</p>
        <p className="text-sm text-blue-900">{price}</p>
        <p className="text-sm text-gray-400">{para}</p>
        <div className="flex justify-center">
          <Image src={Image2} alt="Product Secondary Image" width={150} height={100} className="pb-16" />
        </div>
      </div>
    </div>
  )
}

export default Shoplist
