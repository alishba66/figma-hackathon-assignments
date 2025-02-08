import React from 'react'
import Image from 'next/image'

// Rename Props5 to ProductCardProps for clarity
type ProductCardProps = {
  Image1: string,
  name: string,
  Image2: string,
  price: string,
}

const ProductCard = ({ Image1, name, Image2, price }: ProductCardProps) => {
  return (
    <div className="container w-[210px] h-[500px] ml-12">
    
      <Image src={Image1} alt='Product Image' width={270} height={340} />

      <p className="text-blue-950 text-[12px] ml-2 font-bold">{name}</p>

      <Image src={Image2} alt='Stars Rating' width={70} height={30} className='flex relative bottom-4 ml-36' />
      
      <p className="text-sm text-blue-900 ml-2">{price}</p>
    </div>
  )
}

export default ProductCard
