import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-full h-[286px] bg-[#F6F5FF] flex flex-col justify-center items-start px-4 lg:px-24">
        <h1 className="text-2xl lg:text-4xl text-blue-950 font-bold">Contact Us</h1>
        <p className="font-medium text-sm lg:text-base text-blue-950 mt-2">
          Home Shop <span className="text-pink-700">Contact Us</span>
        </p>
      </div>

      <div className="px-4 lg:px-24">
        <h2 className="text-blue-900 text-xl lg:text-3xl font-bold pt-7 pb-5">Information About Us</h2>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
        </p>
        <Image
          src={'/purple.png'}
          alt="dots"
          width={103}
          height={25}
          className="mt-5"
        />
      </div>

      <div className="px-4 lg:px-24 mt-10">
        <h2 className="text-blue-900 text-xl lg:text-3xl font-bold">Contact Way</h2>
        <Image
          src={'/group.png'}
          alt="contact way"
          width={380}
          height={100}
          className="mt-5"
        />
      </div>

      <div className="px-4 lg:px-24 mt-10">
        <h2 className="text-blue-900 text-xl lg:text-3xl font-bold">Get In Touch</h2>
        <p className="text-sm text-gray-400 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
        </p>
      </div>

      <div className="px-4 lg:px-24 mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="border-2 p-2 w-full" placeholder="Your Name*" />
        <input className="border-2 p-2 w-full" placeholder="Your Email*" />
        <input className="border-2 p-2 w-full md:col-span-2" placeholder="Subject*" />
        <textarea className="border-2 p-2 w-full md:col-span-2 h-[164px]" placeholder="Type Your Message*" />
        <button className="bg-pink-500 w-[157px] h-[44px] text-white">Send Mail</button>
      </div>

      <div className="px-4 lg:px-24 mt-10">
        <Image
          src={'/contactus.png'}
          alt="contact"
          width={463}
          height={422}
          className="w-full max-w-[463px] mx-auto"
        />
      </div>
    </div>
  );
};

export default page;
