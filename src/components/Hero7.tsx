import React from 'react';
import Image from 'next/image';

type Props2 = {
  ImageUrl: string;
  heading: string;
  price: string;
};

const Hero7 = ({ ImageUrl, heading, price }: Props2) => {
  return (
    <div className="flex justify-center">
      <div className="container max-w-xs p-6 bg-white text-center">
        <Image
          src={ImageUrl}
          alt="image"
          width={247}
          height={244}
          className="mx-auto"
        />
        <div className="text-blue-950 pt-4 text-lg font-semibold">
          {heading}
        </div>
        <div className="text-blue-950 pt-2 text-md">{price}</div>
      </div>
    </div>
  );
};

export default Hero7;
