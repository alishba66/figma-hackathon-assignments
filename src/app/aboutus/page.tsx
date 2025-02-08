import React from 'react';
import Image from 'next/image';
import Hero4 from '@/components/Hero4';

const page = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-full h-[286px] bg-[#F6F5FF] flex flex-col justify-center items-start px-4 lg:px-24">
        <h1 className="text-2xl lg:text-4xl text-blue-950 font-bold">About Us</h1>
        <p className="font-medium text-sm lg:text-base text-blue-950 mt-2">
          Home Shop <span className="text-pink-700">About Us</span>
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center px-4 lg:px-24 pt-8">
        <div className="flex-1">
          <Image
            src={'/aboutus.png'}
            alt="aboutus"
            width={500}
            height={390}
            className="w-full max-w-[500px] h-auto"
          />
        </div>
        <div className="flex-1 mt-8 lg:mt-0 lg:ml-10 text-center lg:text-left">
          <h1 className="text-lg lg:text-2xl text-blue-900 font-bold">
            Know About Our E-commerce
            <br /> Business, History
          </h1>
          <p className="text-gray-400 text-sm lg:text-base mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
          </p>
          <button className="w-[110px] h-[40px] bg-pink-500 mt-6 text-white">Contact us</button>
        </div>
      </div>

      <div className="text-center text-lg lg:text-3xl font-bold text-[#151875] pt-20">
        Our Features
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-4 lg:px-20 pb-5">
        <Hero4 ImageUrl="/s1.png" heading="24/7 Support" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />
        <Hero4 ImageUrl="/s2.png" heading="24/7 Support" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />
        <Hero4 ImageUrl="/s3.png" heading="24/7 Support" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />
        <Hero4 ImageUrl="/s4.png" heading="24/7 Support" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />
      </div>

      <h1 className="text-lg lg:text-4xl text-center pt-16 font-bold">Our Client Say!</h1>
      <div className="flex flex-col items-center mt-10">
        <Image src={'/client.png'} alt="clients" width={191} height={64} className="pt-10" />
        <h2 className="text-xl lg:text-2xl font-bold pt-10">Selina Gomez</h2>
        <p className="text-gray-400 pt-1">CEO At Webecy Digital</p>
        <div className="text-gray-400 text-sm lg:text-base text-center px-4 lg:px-20 mt-6">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
        </div>
        <Image src={'/pink.png'} alt="line" width={73} height={3} className="pt-10 pb-32" />
      </div>
    </div>
  );
};

export default page;
