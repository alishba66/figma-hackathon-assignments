import React from 'react';
import Image from 'next/image';

type Props = {
  ImageUrl: string;
  heading: string;
  para: string;
};

const Hero4 = ({ ImageUrl, heading, para }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="container max-w-sm bg-white p-6 text-center">
        <Image
          src={ImageUrl}
          alt="image"
          width={65}
          height={65}
          className="mx-auto"
        />
        <div className="text-blue-900 text-2xl pt-6">{heading}</div>
        <p className="pt-4 text-gray-400">{para}</p>
      </div>
    </div>
  );
};

export default Hero4;
